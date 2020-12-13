import { useState, useEffect, useRef, memo } from 'react';

function SearchBox({ search, fetching }) {
  let currentTimeout = useRef();
  const [query, setQuery] = useState('');
  const queryLength = useRef();

  useEffect(() => {
    const newLength = query.trim().length;

    if (newLength !== queryLength.current) {
      queryLength.current = newLength;

      currentTimeout.current = setTimeout(() => {
        search(query.trim().toLocaleLowerCase());
      }, 500);
    }

    return () => {
      if (currentTimeout.current) {
        clearTimeout(currentTimeout.current);
      }
    };
  }, [query, search]);

  return (
    <div className="search-box">
      <input className="search-box__input" type="text" placeholder="Search" onChange={e => setQuery(e.target.value)} />

      <div className="search-box__icon">
        {fetching ? (
          <i className="search-box__icon__image fa fa-spinner fa-spin" />
        ) : (
          <i className="search-box__icon__image fa fa-search" />
        )}
      </div>
    </div>
  );
}

export default memo(SearchBox);
