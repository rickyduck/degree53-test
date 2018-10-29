import axios from 'axios';
import { call, put, throttle } from 'redux-saga/effects';
import { apiBaseEndpoint } from '../config/api';
import * as actions from './actions';

export function* fetchResults(action) {
  const githubUrl = `${apiBaseEndpoint}/repositories`;
  yield put(actions.fetchResultsStarted());

  try {
    const response = yield call(axios.get, githubUrl, {
      params: { q: action.searchText }
    });
    yield put(actions.fetchResultsSucceeded(response.data));
  } catch (e) {
    yield put(actions.fetchResultsFailed(e.message));
  }
}

export function* fetchResultsSaga() {
  yield throttle(500, actions.FETCH_RESULTS_REQUESTED, fetchResults);
}
