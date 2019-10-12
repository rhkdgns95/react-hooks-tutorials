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

