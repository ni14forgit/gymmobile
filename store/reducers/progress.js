import { SET_PROGRESS_TITLE } from "../actions/progress";
const initialState = {
  progresstitle: "Progress",
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROGRESS_TITLE:
      return { ...state, progresstitle: action.progressTitle };
    default:
      return state;
  }
};

export default navigationReducer;
