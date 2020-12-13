import * as actionTypes from '../constants/movies';

const initialState = {
  errors: {},
  fetching: false,
  filteredMovies: [],
  genres: {},
  movies: [],
  selectedFilter: -1,
};

export default function moviesReducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;

    case actionTypes.DISCOVER_MOVIES_REQUEST:
    case actionTypes.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        erros: {},
        fetching: true,
      };

    case actionTypes.DISCOVER_MOVIES_SUCCESS:
    case actionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        movies: payload,
      };

    case actionTypes.DISCOVER_MOVIES_FAILURE:
    case actionTypes.SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        erros: payload,
        fetching: false,
        movies: [],
      };

    case actionTypes.FILTER_MOVIES_BY_RATING_FINISHED:
      return {
        ...state,
        filteredMovies: payload.movies,
        selectedFilter: payload.selectedFilter,
      };

    case actionTypes.GET_GENRES_REQUEST:
      return {
        ...state,
        genres: [],
      };

    case actionTypes.GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: payload.reduce((obj, { id, name }) => (obj[id] = name) && obj, {}),
      };
  }
}
