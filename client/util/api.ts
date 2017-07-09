import { GitHubRepository, GitHubUserProfile } from '../types';
import { createFromGitHubName } from '../types/programming-language';

const RUN_LOCALLY = true;
import { mattnedrich as profile } from '../../test_fixtures/users/mattnedrich';
import { mattNedrichRepos } from '../../test_fixtures/repos/mattnedrich';

async function fetchUserProfile(username: string): Promise<GitHubUserProfile | undefined> {
  if(RUN_LOCALLY) {
    const jsonResult = profile ;
    return gitHubUserResultToLocalTypeMapper(jsonResult);
  } else {
    const result = await fetch(`https://api.github.com/users/${username}`);
    const jsonResult = await result.json();
    return gitHubUserResultToLocalTypeMapper(jsonResult);
  }
}

async function fetchUserRepositories(username: string): Promise<GitHubRepository[] | undefined> {
  if(RUN_LOCALLY) {
    const jsonResult = mattNedrichRepos;
    const repos = gitHubResultToLocalTypeMapper(jsonResult);
    return repos as GitHubRepository[];
  } else {
    const result = await fetch(`https://api.github.com/users/${username}/repos`);
    const jsonResult = await result.json();
    const repos = gitHubResultToLocalTypeMapper(jsonResult);
    return repos as GitHubRepository[];
  }
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
  console.log(results);
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
