export const FETCH_RESULTS_REQUESTED = 'FETCH_RESULTS_REQUESTED';
export const FETCH_RESULTS_STARTED = 'FETCH_RESULTS_STARTED';
export const FETCH_RESULTS_SUCCEEDED = 'FETCH_RESULTS_SUCCEEDED';
export const FETCH_RESULTS_FAILED = 'FETCH_RESULTS_FAILED';

export const fetchResultsRequested = () => ({
  type: FETCH_RESULTS_REQUESTED
});

export const fetchResultsStarted = () => ({
  type: FETCH_RESULTS_STARTED
});

export const fetchResultsSucceeded = (response, filters) => ({
  type: FETCH_RESULTS_SUCCEEDED,
  data: {
    response
  }
});

export const fetchResultsFailed = error => ({
  type: FETCH_RESULTS_FAILED,
  data: {
    error
  }
});
