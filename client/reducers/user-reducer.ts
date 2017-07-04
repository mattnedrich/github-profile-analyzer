import applicationState from '../application-state';
import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';

const defaultState = applicationState;

const updateState = (state = defaultState, action: Actions.AnyAction) => {
  switch(action.type) {

  case ActionTypes.START_FETCH_USER_PROFILE:
    return {
      ...state,
      fetchingUserProfile: true
    }

  case ActionTypes.FETCH_USER_PROFILE_SUCCESS:
    return {
      ...state,
      fetchingUserProfile: false,
      user: action.profile,
    }

  case ActionTypes.FETCH_USER_PROFILE_FAILED:
    return {
      ...state,
      fetchingUserProfile: false,
      user: undefined,
    }

  default:
    return state;
  }
};

export default updateState;
