import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doDiscoverMovies, doSearchMovies, doFilterMoviesByRating, doShowModal, doGetGenres } from '../store/actions';

import FilterBox from '../components/FilterBox';
import Movie from '../components/Movie';
import MovieDetail from '../components/MovieDetail';
import SearchBox from '../components/SearchBox';
import UnhandledError from '../components/UnhandledError';

function MoviesContainer() {
  const dispatch = useDispatch();
  const { movies, fetching, errors, filteredMovies, selectedFilter } = useSelector(state => ({ ...state.movies }));
  const moviesList = selectedFilter >= 0 ? filteredMovies : movies;

  const searchMovies = query => dispatch(doSearchMovies(query));
  const filterMoviesByRating = rating => dispatch(doFilterMoviesByRating(rating));
  const showDetail = movie => dispatch(doShowModal({ content: <MovieDetail {...movie} /> }));

  useEffect(() => {
    dispatch(doDiscoverMovies());
    dispatch(doGetGenres());
  }, [dispatch]);

  if (errors.unhandled) {
    return <UnhandledError />;
  }

  return (
    <section className="movies">
      <div className="movies__top-bar">
        <div className="movies__top-bar__search">
          <div className="container">
            <SearchBox search={searchMovies} fetching={fetching} />
          </div>
        </div>

        <div className="movies__top-bar__filter">
          <div className="container">
            <FilterBox onChange={filterMoviesByRating} selectedFilter={selectedFilter} />
          </div>
        </div>
      </div>

      {moviesList.length ? (
        <ul className="movies__list">
          {moviesList.map(movie => (
            <li onClick={() => showDetail(movie)} key={movie.id} className="movies__list__item">
              <Movie {...movie} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="container">
          <h2 className="movies__message">{fetching ? 'Wait for it...' : 'Nothing to see here...'}</h2>
        </div>
      )}
    </section>
  );
}

export default MoviesContainer;
