export const SET_BACKBUTTON = "SET_BACKBUTTON";
export const SET_BACKFUNCTION = "SET_BACKFUNCTION";

export const setBackButton = (isBack) => {
  return { type: SET_BACKBUTTON, backButtonBool: isBack };
};

export const setBackFunction = (popStackFunc) => {
  return { type: SET_BACKFUNCTION, backFunction: popStackFunc };
};
