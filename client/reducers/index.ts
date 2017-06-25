import applicationState from '../application-state';
import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';

type Action = Actions.StartFetchUserProfile
  | Actions.FetchUserProfileSuccess
  | Actions.FetchUserProfileFailed
  | Actions.StartFetchUserRepositories
  | Actions.FetchUserRepositoriesSuccess
  | Actions.FetchUserRepositoriesFailed;

const defaultState = applicationState;

const updateState = (state = defaultState, action: Action) => {
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

  case ActionTypes.START_FETCH_USER_REPOSITORIES:
    return {
      ...state,
      fetchingUserRepos: true
    }

  case ActionTypes.FETCH_USER_REPOSITORIES_SUCCESS:
    return {
      ...state,
      fetchingUserRepos: false,
      userRepos: action.repositories,
    }

  case ActionTypes.FETCH_USER_REPOSITORIES_FAILED:
    return {
      ...state,
      fetchingUserRepos: false,
      userRepos: undefined,
    }

  default:
    return state;
  }
};

export default updateState;
