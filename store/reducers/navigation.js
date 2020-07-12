import { SET_BACKBUTTON, SET_BACKFUNCTION } from "../actions/navigation";
const initialState = {
  isBack: false,
  backFunction: () => {},
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKBUTTON:
      return { ...state, isBack: action.backButtonBool };
    case SET_BACKFUNCTION:
      console.log("SET BACK FUNCTION");
      return { ...state, backFunction: action.backFunction };
    default:
      return state;
  }
};

export default mealsReducer;
