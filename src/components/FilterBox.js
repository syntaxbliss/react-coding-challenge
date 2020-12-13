import { useRef, useState, memo } from 'react';
import classnames from 'classnames';

function getStarClasses(index, hoveredIndex, selectedFilter) {
  const isHovered = index <= hoveredIndex;
  const isSelected = index <= selectedFilter;

  return classnames({
    'filter-box__stars__item fa': true,
    'filter-box__stars__item--selected': isSelected,
    'filter-box__stars__item--hovered': isHovered,
    'fa-star-o': !(isHovered || isSelected),
    'fa-star': isHovered || isSelected,
  });
}

function FilterBox({ onChange, selectedFilter }) {
  const stars = useRef(new Array(5).fill());
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const currentFilter = hoveredIndex !== -1 ? hoveredIndex : selectedFilter;
  const minRate = currentFilter * 2;
  const maxRate = (currentFilter + 1) * 2;

  return (
    <div className="filter-box">
      <span className="filter-box__text">
        {currentFilter === -1 ? 'Filter by rating' : `Rated from ${minRate} to ${maxRate}`}
      </span>

      <span className="filter-box__stars">
        {stars.current.map((_, index) => (
          <i
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            onClick={() => onChange(index === selectedFilter ? -1 : index)}
            key={index}
            className={getStarClasses(index, hoveredIndex, selectedFilter)}
          />
        ))}
      </span>
    </div>
  );
}

export default memo(FilterBox);
