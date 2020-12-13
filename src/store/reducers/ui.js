import * as actionTypes from '../constants/ui';

const initialState = {
  modal: {
    visible: false,
    content: null,
  },
};

export default function uiReducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;

    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...payload,
          visible: true,
        },
      };

    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          visible: false,
        },
      };
  }
}
