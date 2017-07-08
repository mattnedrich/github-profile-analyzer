import { GitHubRepository, GitHubUserProfile } from '../types';
import { createFromGitHubName } from '../types/programming-language';

async function fetchUserProfile(username: string): Promise<GitHubUserProfile | undefined> {
  const result = await fetch(`https://api.github.com/users/${username}`);
  const jsonResult = await result.json();
  return gitHubUserResultToLocalTypeMapper(jsonResult);
}

async function fetchUserRepositories(username: string): Promise<GitHubRepository[] | undefined> {
  const result = await fetch(`https://api.github.com/users/${username}/repos`);
  const jsonResult = await result.json();
  const repos = gitHubResultToLocalTypeMapper(jsonResult);
  console.log(repos);
  return repos as GitHubRepository[];
}

export const Api = {
  fetchUserProfile,
  fetchUserRepositories,
};

export function gitHubUserResultToLocalTypeMapper(userResult: any): GitHubUserProfile {
  return {
    username: userResult.login,
    name: userResult.name,
    location: userResult.location,
    description: userResult.bio,
    company: userResult.company,
    website: userResult.blog,
    profileImageUrl: userResult.avatar_url,
  };
}

export function gitHubResultToLocalTypeMapper(results: any): GitHubRepository[] {
  return results.map((result: any) => {
    return {
      name: result.name,
      description: result.description,
      starCount: result.stargazers_count,
      forkCount: result.forks_count,
      issueCount: result.open_issues_count,
      created: new Date(result.created_at),
      modified: new Date(result.updated_at),
      isFork: result.fork,
      language: createFromGitHubName(result.language),
      url: result.html_url,
    }
  });
}
