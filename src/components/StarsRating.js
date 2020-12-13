import { memo } from 'react';
import classnames from 'classnames';

function StarsRating({ rating, votes, className }) {
  const fullStarsCount = Math.floor(rating / 2);
  const halfStarCount = rating / 2 - fullStarsCount >= 0.5 ? 1 : 0;

  let stars = new Array(fullStarsCount).fill('fa-star');

  if (halfStarCount) {
    stars.push('fa-star-half-o');
  }

  stars = stars.concat(new Array(5 - fullStarsCount - halfStarCount).fill('fa-star-o'));

  const classes = classnames('stars-rating', { [className]: className });

  return (
    <span className={classes}>
      <span className="stars-rating__stars">
        {stars.map((star, index) => (
          <i className={classnames('fa', star)} key={index} />
        ))}
      </span>

      <span className="stars-rating__average">{rating.toFixed(1)}</span>

      {votes ? (
        <span className="stars-rating__votes">
          over {votes} {votes > 1 ? 'votes' : 'vote'}
        </span>
      ) : null}
    </span>
  );
}

export default memo(StarsRating);
