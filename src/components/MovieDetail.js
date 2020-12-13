import { useSelector } from 'react-redux';
import moment from 'moment';

import MoviePoster from './MoviePoster';
import StarsRating from './StarsRating';

function MovieDetail({
  poster_path,
  title,
  original_title,
  release_date,
  vote_average,
  vote_count,
  overview,
  genre_ids,
}) {
  const genres = useSelector(state => ({ ...state.movies.genres }));

  return (
    <div className="movie-detail">
      <div className="movie-detail__poster">
        <MoviePoster image={poster_path} title={title} />
      </div>

      <div className="movie-detail__content">
        <p className="movie-detail__content__item">
          <b>Title:</b>
          {title}
        </p>

        <p className="movie-detail__content__item">
          <b>Original Title:</b>
          {original_title}
        </p>

        <p className="movie-detail__content__item">
          <b>Rating:</b>
          <StarsRating rating={vote_average} votes={vote_count} />
        </p>

        <p className="movie-detail__content__item">
          <b>Release Date:</b>
          {moment(release_date).format('MMMM D, YYYY')}
        </p>

        <p className="movie-detail__content__item">
          <b>Plot:</b>
          {overview}
        </p>

        {genre_ids.length ? (
          <p className="movie-detail__content__item">
            <b>Genre:</b>
            {genre_ids.map(id => genres[id]).join(', ')}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default MovieDetail;
