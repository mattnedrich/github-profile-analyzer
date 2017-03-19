import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';

export const fetchUserProfile: (username: string) => Actions.FetchUserProfile = (username) => {
  return {
    type: ActionTypes.START_FETCH_USER_PROFILE,
    username: username
  };
}
