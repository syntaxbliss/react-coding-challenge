import { useEffect } from 'react';

const OVERLAYED_CLASS = 'overlayed';

function useOverlay(condition) {
  useEffect(() => {
    if (condition) {
      document.body.classList.add(OVERLAYED_CLASS);
    } else {
      document.body.classList.remove(OVERLAYED_CLASS);
    }
  }, [condition]);
}

export default useOverlay;
