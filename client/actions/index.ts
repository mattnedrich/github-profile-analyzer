import * as ActionTypes from '../action-types/index';

export type FetchUserProfile = {
  type: ActionTypes.START_FETCH_USER_PROFILE,
  username: string
}
