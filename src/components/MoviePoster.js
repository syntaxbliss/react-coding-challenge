import { memo } from 'react';

function MoviePoster({ image, title }) {
  if (image) {
    return (
      <div className="movie-poster">
        <div className="movie-poster__content">
          <img className="movie-poster__image" src={`https://image.tmdb.org/t/p/w300/${image}`} alt="poster" />
        </div>
      </div>
    );
  }

  return (
    <div className="movie-poster movie-poster--no-image">
      <div className="movie-poster__content">
        <i className="movie-poster__icon fa fa-photo" />
        <h2 className="movie-poster__title header-2">{title}</h2>
      </div>
    </div>
  );
}

export default memo(MoviePoster);
