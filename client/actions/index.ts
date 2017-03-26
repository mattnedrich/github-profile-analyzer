import * as ActionTypes from '../action-types/index';

export type StartFetchUserProfile = {
  type: ActionTypes.START_FETCH_USER_PROFILE,
  username: string
}

export type FetchUserProfileSuccess = {
  type: ActionTypes.FETCH_USER_PROFILE_SUCCESS,
  profile: any
}

export type FetchUserProfileFailed = {
  type: ActionTypes.FETCH_USER_PROFILE_FAILED,
  error: string
}
