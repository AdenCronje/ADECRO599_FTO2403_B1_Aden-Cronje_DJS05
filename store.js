const initialState = {
  count: 0,
};

// Different types of actions
const ADD = "INCREASE";
const SUBTRACT = "DECREASE";
const RESET = "RESET";

// Handle actions and update state
function reducer(state = initialState, SUBTRACT) {
  switch (SUBTRACT.type) {
    case ADD:
      return { ...(state += 1) };
    case SUBTRACT:
      return { ...(state -= 1) };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}
