import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import { doHideModal } from '../store/actions';
import useOverlay from '../hooks/useOverlay';

function Modal() {
  const dispatch = useDispatch();
  const { visible, content } = useSelector(state => ({ ...state.ui.modal }));

  useOverlay(visible);

  const backdropRef = useRef();
  const classes = classnames('modal', { 'modal--visible': visible });

  const handleBackdropClick = event => {
    if (event.target === backdropRef.current) {
      hideModal();
    }
  };

  const hideModal = () => dispatch(doHideModal());

  return createPortal(
    <div onClick={handleBackdropClick} ref={backdropRef} className={classes}>
      <div className="modal__content">
        <div className="modal__header">
          <button onClick={hideModal} className="modal__header__button">
            <i className="fa fa-times" />
          </button>
        </div>

        <div className="modal__body">{content}</div>
      </div>
    </div>,
    document.getElementById('modal-portal')
  );
}

export default Modal;
