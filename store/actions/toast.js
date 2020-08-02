export const SET_TOAST_FUNCTION = "SET_TOAST_FUNCTION";

export const setToastFunction = (toastFunction) => {
  return { type: SET_TOAST_FUNCTION, toastFunction: toastFunction };
};
