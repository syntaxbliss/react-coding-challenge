import * as moviesActionTypes from './constants/movies';
import * as uiActionTypes from './constants/ui';

const createAction = type => payload => ({ type, payload });

// Movies
export const doDiscoverMovies = createAction(moviesActionTypes.DISCOVER_MOVIES);
export const doSearchMovies = createAction(moviesActionTypes.SEARCH_MOVIES);
export const doFilterMoviesByRating = createAction(moviesActionTypes.FILTER_MOVIES_BY_RATING);
export const doGetGenres = createAction(moviesActionTypes.GET_GENRES);

// UI
export const doShowModal = createAction(uiActionTypes.SHOW_MODAL);
export const doHideModal = createAction(uiActionTypes.HIDE_MODAL);
