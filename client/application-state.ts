import {GitHubUserProfile, GitHubRepository } from './types';

export type ApplicationState = {
  user: GitHubUserProfile | undefined,
  userRepos: GitHubRepository[] | undefined,
  fetchingUserProfile: boolean
  fetchingUserRepos: boolean
}

const applicationState: ApplicationState  = {
  user: undefined,
  userRepos: undefined,
  fetchingUserProfile: false,
  fetchingUserRepos: false,
};

export default applicationState;
