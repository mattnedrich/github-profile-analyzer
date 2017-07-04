import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';

import { GitHubRepository, GitHubUserProfile } from '../types';

export function startFetchUserProfile(username: string): Actions.StartFetchUserProfile {
  return {
    type: ActionTypes.START_FETCH_USER_PROFILE,
    username
  };
}

export function fetchUserProfileSuccess(profile: GitHubUserProfile): Actions.FetchUserProfileSuccess {
  return {
    type: ActionTypes.FETCH_USER_PROFILE_SUCCESS,
    profile,
  };
}

export function startFetchUserRepositories(username: string): Actions.StartFetchUserRepositories {
  return {
    type: ActionTypes.START_FETCH_USER_REPOSITORIES,
    username
  };
}

export function fetchUserRepositoriesSuccess(repositories: GitHubRepository[]): Actions.FetchUserRepositoriesSuccess {
  return {
    type: ActionTypes.FETCH_USER_REPOSITORIES_SUCCESS,
    repositories,
  };
}

export function fetchUserRepositoriesFailed(error: string): Actions.FetchUserRepositoriesFailed {
  return {
    type: ActionTypes.FETCH_USER_REPOSITORIES_FAILED,
    error,
  };
}
