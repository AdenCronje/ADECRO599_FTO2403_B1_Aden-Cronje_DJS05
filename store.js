const initialState = {
  count: 0,
};

// Different types of actions
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

// Handle actions and update state
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    case SUBTRACT:
      return { ...state, count: state.count - 1 };
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

// SCENARIO 1: Initial state verification
console.log(myStore.getState());

//Subscribe to state changes
myStore.subscribe(() => console.log(store.getState()));
console.log(myStore.getState());

// SCENARIO 2: Incrementing the Counter
myStore.dispatch({ type: ADD });
myStore.dispatch({ type: ADD });
console.log(myStore.getState());

// SCENARIO 3: Decrementing the Counter
myStore.dispatch({ type: SUBTRACT });
console.log(myStore.getState());

// SCENARIO 4: Resetting the Counter
myStore.dispatch({ type: RESET });
console.log(myStore.getState());
