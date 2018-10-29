import {
  FETCH_RESULTS_STARTED,
  FETCH_RESULTS_SUCCEEDED,
  FETCH_RESULTS_FAILED
} from './actions';

const defaultState = {
  results: [],
  fetching: false,
  filters: null,
  error: false
};

const githubReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_RESULTS_STARTED:
      return {
        ...state,
        fetching: true,
        error: false
      };
    case FETCH_RESULTS_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        results: action.data.response,
        error: false
      };
    case FETCH_RESULTS_FAILED:
      return {
        ...state,
        fetching: false,
        results: [],
        error: action.data.error
      };
    default:
      return state;
  }
};

export default githubReducer;
