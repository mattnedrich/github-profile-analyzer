import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';
import * as $ from 'jquery'
import GithubApiAdapter from '../util/github-api-adapter';
import {UserProfileInfo} from '../util/github-api-adapter';

export const startFetchUserProfile: (username: string) => Actions.StartFetchUserProfile =
  (username) => {
    return {
      type: ActionTypes.START_FETCH_USER_PROFILE,
      username: username
    };
  }

export const fetchUserProfile: (username: string) => (dispatch: any) => any =
  (username) => {
    return (dispatch) => {
      dispatch(startFetchUserProfile(username))
      return GithubApiAdapter.getUserProfile(username)
        .then((userProfileInfo: UserProfileInfo) => {
          userProfileInfo.accountCreated
        })

    }
  }
