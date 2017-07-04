import applicationState from '../application-state';
import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';

import updateUserState from './user-reducer';
import updateUserRepositoryState from './user-repository-reducer';

const defaultState = applicationState;

const updateState = (state = defaultState, action: Actions.AnyAction) => {
  state = updateUserState(state, action);
  state = updateUserRepositoryState(state, action);
  return state;
};

export default updateState;
