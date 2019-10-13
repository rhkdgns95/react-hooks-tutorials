# Rules of Hooks
- "Only Call Hooks at the Top Level"
Don`t call Hooks inside loops, conditions, or nested functions
- "Only Call Hooks from React Functions"
Call them from within React functional components and not just any regular Javascript function

---

## Summary - useState()
- The useState hook lets you add state to functional components.
- In classses, the state is always an object.
- With the useState hook, the state doesn`t have to an object.
- The useState hook returns an array with 2 elements.
: First, The first element is the currentValue. 
: Two, The Second element is a state setter function.
- New state value depends on the previous state value? You can pass a function to the setter funciton.
- when dealing with Objects or arrays, always make sure to spread your state variable and then call the setter function

---

### useEffect
- The Effect Hook lets you perform side effects in functional components
- It is a close replacement for componentDidMount, componentDidUpdate, componentWillUnmount.
: componentDidMount -> componentDidUpdate -> componentWillUnmount

### Context
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.


### useReducer 
- useReducer is a hook that is used for state management.
- it is an alternative to useState.
- useState is built using useReducer.
- When to useReducer vs useState?

### Hooks so far
- useState - state.
- useEffect - side effects.
- useContext - context API.
- useReducer - reducers.

### reduce vs useReducer
- reduce in Javascript 
  : array.reduce(reducer, initialValue);
  : singleValue = reducer(accumulator, itemValue);
  : reduce method returns a single value.

- useReducer in React
  : useReducer(reducer, initialValue);
  : newState = reducer(currentState, action);
  : useReducer returns a pair of values. [newState, dispatch]

### useReducer Summary
- useReducer is a hook that is used for state management in React.
- useReducer is related to reducer functions.
- useReducer(reducer, initialState)
- reducer(currentState, action)

### useReducer with useContext
- useRedcuer - Local state management.
- Share state between components - Global state management.
- useRedcuer + useContext

### useState vs useReducer
- Scenario
1. Type of state.
  [useState]: Number, String, Boolean
  [useReducer]: Object or Array
2. Number of state transitions.
  [useState]: One or Two
  [useReducer]: Too many
3. Related state transitions.
  [useState]: No 
  [useReducer]: Yes 
4. Business logic
  [useState]: No business logic
  [useReducer]: Complex business logic
5. Local vs Global
  [useState]: Local 
  [useReducer]: Global 


### useCallback Hook
- What?
: useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.
- Why?
: It is useful when passing callbacks to optimized child component that rely on reference equality to prevent unnecessary renders.
 