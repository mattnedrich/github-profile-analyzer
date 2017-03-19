import applicationState from '../application-state';
import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';

type Action = Actions.FetchUserProfile;

const defaultState = applicationState;

const updateState = (state = defaultState, action: Action) => {
  switch(action.type) {
  case ActionTypes.START_FETCH_USER_PROFILE:
    return {
      username: state.username,
      fetchingUserProfile: true
    }
  default:
    return state;
  }
};

export default updateState;
