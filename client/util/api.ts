import { GitHubRepository, GitHubUserProfile } from '../types';

async function fetchUserProfile(username: string): Promise<GitHubUserProfile | undefined> {
  const result = await fetch(`https://api.github.com/users/${username}`);
  const jsonResult = await result.json();
  const profile = {
    username: jsonResult.login,
    name: jsonResult.name,
    location: jsonResult.location,
    description: jsonResult.bio,
    company: jsonResult.company,
    website: jsonResult.blog,
    profileImageUrl: jsonResult.avatar_url,
  }
  return profile as GitHubUserProfile;
}

async function fetchUserRepositories(username: string): Promise<GitHubRepository[] | undefined> {
  const result = await fetch(`https://api.github.com/users/${username}/repos`);
  const jsonResult = await result.json();
  const repos = jsonResult.map((result: any) => {
    return {
      name: result.name,
      description: result.description,
      starCount: result.stargazers_count,
      forkCount: result.forks_count,
      issueCount: result.open_issues_count,
      created: new Date(result.created_at),
      modified: new Date(result.updated_at),
      isFork: result.fork,
      language: {
        displayName: result.language,
        id: 0,
      }
    }
  });
  console.log(repos);
  return repos as GitHubRepository[];
}

export const Api = {
  fetchUserProfile,
  fetchUserRepositories,
};
