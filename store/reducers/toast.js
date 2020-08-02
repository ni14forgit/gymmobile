import { SET_TOAST_FUNCTION } from "../actions/toast";

const initialState = {
  toastFunction: null,
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOAST_FUNCTION:
      return { ...state, toastFunction: action.toastFunction };
    default:
      return state;
  }
};

export default toastReducer;
