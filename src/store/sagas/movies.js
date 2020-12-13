import { call, put, takeLatest, all, select, fork } from 'redux-saga/effects';

import * as actionTypes from '../constants/movies';
import MoviesService from '../../services/movies';

function* discover() {
  try {
    yield put({ type: actionTypes.DISCOVER_MOVIES_REQUEST });

    const { results } = yield call(MoviesService.discover);

    yield put({ type: actionTypes.DISCOVER_MOVIES_SUCCESS, payload: results });
  } catch (e) {
    const errors = { unhandled: true };

    yield put({ type: actionTypes.DISCOVER_MOVIES_FAILURE, payload: { errors } });
  }
}

function* search({ payload: query }) {
  try {
    yield fork(clearRatingsFilter);
    yield put({ type: actionTypes.SEARCH_MOVIES_REQUEST });

    if (query.length) {
      const { results } = yield call(MoviesService.search, query);

      yield put({ type: actionTypes.SEARCH_MOVIES_SUCCESS, payload: results });
    } else {
      yield call(discover);
    }
  } catch (e) {
    const errors = { unhandled: true };

    yield put({ type: actionTypes.SEARCH_MOVIES_FAILURE, payload: { errors } });
  }
}

function* filterByRating({ payload: rating }) {
  let filteredMovies = yield select(state => state.movies.movies);

  if (rating >= 0) {
    const min = rating * 2;
    const max = (rating + 1) * 2;

    filteredMovies = filteredMovies.filter(movie => movie.vote_average >= min && movie.vote_average < max);
  }

  const result = { movies: filteredMovies, selectedFilter: rating };

  yield put({ type: actionTypes.FILTER_MOVIES_BY_RATING_FINISHED, payload: result });
}

function* clearRatingsFilter() {
  const result = { movies: [], selectedFilter: -1 };

  yield put({ type: actionTypes.FILTER_MOVIES_BY_RATING_FINISHED, payload: result });
}

function* getGenres() {
  yield put({ type: actionTypes.GET_GENRES_REQUEST });

  try {
    const { genres } = yield call(MoviesService.getGenres);

    yield put({ type: actionTypes.GET_GENRES_SUCCESS, payload: genres });
  } catch (e) {
    const errors = { unhandled: true };

    yield put({ type: actionTypes.GET_GENRES_FAILURE, payload: { errors } });
  }
}

export default function* moviesSagas() {
  yield all([
    takeLatest(actionTypes.DISCOVER_MOVIES, discover),
    takeLatest(actionTypes.SEARCH_MOVIES, search),
    takeLatest(actionTypes.FILTER_MOVIES_BY_RATING, filterByRating),
    takeLatest(actionTypes.GET_GENRES, getGenres),
  ]);
}
