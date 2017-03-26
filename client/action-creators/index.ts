import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';
import * as $ from 'jquery'

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
      return $.get('https://api.github.com/users/mattnedrich')
        .then((result: any) => {console.log(result)})
        // .error((error: any) => {console.log(error)})
    }
  }
