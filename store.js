const initialState = {
  count: 0,
};

// Different types of actions
const ADD = "INCREASE";
const SUBTRACT = "DECREASE";
const RESET = "RESET";

// Handle actions and update state
function reducer(state = initialState, action) {
  switch (action.type) {
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

// Creates the store
function initializeStore(reducer) {
  let currentState = initialState;
  let listeners = [];
  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action);
      listeners.forEach((listener) => listener());
      subscribe: (listener) => {
        listener.push(listeners);
        return () => {
          listener.filter(listeners);
        };
      };
    },
  };
}

let myStore = initializeStore(reducer);

// Initial state verification
console.log(myStore.getState());
