import axios from 'axios';
import { select, call, put, takeLatest } from 'redux-saga/effects';
import { apiBaseEndpoint } from '../config/api';
import * as actions from './actions';

export function* fetchResults(searchText) {
  const githubUrl = `${apiBaseEndpoint}/repositories`;
  yield put(actions.fetchResultsStarted());

  try {
    const response = yield axios.get(githubUrl, { q: searchText });
    yield put(actions.fetchResultsSucceeded(response.data));
  } catch (e) {
    yield put(actions.fetchResultsFailed(e.message));
  }
}

export function* fetchResultsSaga() {
  yield takeLatest(actions.FETCH_RESULTS_REQUESTED, fetchResults);
}
