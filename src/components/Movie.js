import { memo } from 'react';

import MoviePoster from './MoviePoster';
import StarsRating from './StarsRating';

function Movie({ poster_path, title, vote_average, release_date, overview }) {
  const year = release_date.substr(0, 4);

  return (
    <article className="movie">
      <MoviePoster image={poster_path} title={title} />

      <div className="movie__overlay">
        <div className="movie__header">
          <h2 className="header-2">{title}</h2>
          <StarsRating className="movie__header__stars" rating={vote_average} />
        </div>

        <div className="movie__body">
          <p className="movie__body__item">
            <b>Release:</b> {year}
          </p>

          <p className="movie__body__item">
            <b>Plot:</b> {overview}
          </p>
        </div>
      </div>
    </article>
  );
}

export default memo(Movie);
