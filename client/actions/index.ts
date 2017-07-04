import * as ActionTypes from '../action-types/index';
import {
  GitHubRepository,
  GitHubUserProfile
} from '../types';

export type StartFetchUserProfile = {
  type: ActionTypes.START_FETCH_USER_PROFILE,
  username: string
}

export type FetchUserProfileSuccess = {
  type: ActionTypes.FETCH_USER_PROFILE_SUCCESS,
  profile: GitHubUserProfile,
}

export type FetchUserProfileFailed = {
  type: ActionTypes.FETCH_USER_PROFILE_FAILED,
  error: string
}

export type StartFetchUserRepositories = {
  type: ActionTypes.START_FETCH_USER_REPOSITORIES,
  username: string
}

export type FetchUserRepositoriesSuccess = {
  type: ActionTypes.FETCH_USER_REPOSITORIES_SUCCESS,
  repositories: GitHubRepository[]
}

export type FetchUserRepositoriesFailed = {
  type: ActionTypes.FETCH_USER_REPOSITORIES_FAILED,
  error: string
}

export type AnyAction = StartFetchUserProfile
  | FetchUserProfileSuccess
  | FetchUserProfileFailed
  | StartFetchUserRepositories
  | FetchUserRepositoriesSuccess
  | FetchUserRepositoriesFailed
