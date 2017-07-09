import * as ActionTypes from '../action-types';
import * as Actions from '../actions';
import * as ActionCreators from '../action-creators';
import { Api } from '../util/api';

import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchUserRepositories(action: Actions.FetchUserProfileSuccess) {
  try {
    const username = action.profile.username;

    yield put(ActionCreators.startFetchUserRepositories(username));

    const repositories = yield call(Api.fetchUserRepositories, username);

    const successAction = ActionCreators.fetchUserRepositoriesSuccess(repositories);
    yield put(successAction);

  } catch (e) {
    console.log(e);
  }
}

function* fetchUserProfile(action: Actions.StartFetchUserProfile) {
  try {
    const profile = yield call(Api.fetchUserProfile, action.username);
    const successAction = ActionCreators.fetchUserProfileSuccess(profile);
    yield put(successAction);
  } catch (e) {
    console.log(e);
  }
}

function* sagas(): IterableIterator<any> {
  yield takeEvery(ActionTypes.START_FETCH_USER_PROFILE, fetchUserProfile);
  yield takeEvery(ActionTypes.FETCH_USER_PROFILE_SUCCESS, fetchUserRepositories);
}

export default sagas;
