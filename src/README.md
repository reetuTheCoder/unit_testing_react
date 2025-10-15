What is a “Thunk”?

A thunk is just a function that delays work.
In Redux, a thunk is a function that wraps an action so you can do asynchronous logic (like fetching data from an API) before dispatching the final action to the reducer.


What is an action in Redux?

An action is like a message that says: “Hey Redux, do something!”
type → what to do like (ADD_TODO)
payload → extra information needed 


What is a payload?
Payload is the data you send along with the action.
Think of it as the package attached to your message.
Without payload, Redux only knows what to do, but not with what data.


dispatch({ type: "ADD_TODO", payload: "Learn Redux" });

type = "ADD_TODO" → tells the reducer we want to add a todo
payload = "Learn Redux" → tells the reducer what todo to add



Payload is optional — not every action needs it.
It can be any type: string, number, array, object…
It’s just a convention. You can name it data, info, task — but payload is standard in Redux.

Simple way to understand:
Action type → “Do something”
Payload → “Here’s the stuff to do it with”



1. Reducer Function - A reducer is a function that tells Redux how to update the state based on an action and It receives two things:
A- The current state
B- The action (with type and payload)
It returns a new state.
Important: reducers never change state directly, they always return a new copy.

state → current state
action → tells what to do + payload (data)
return → new updated state



2. Dispatch Function - dispatch is how you send an action to the reducer. Think of it like sending a message to Redux: “Hey, do this action!”


useSelector() Hook -  it is a redux hook that allow you to access state from the redux store in the functional components.


useDispatch() Hook - Get the dispatch function from the Redux store to send actions.



store.getState() Methods - it's a type of method that allow you get entire current state from th store alow you can access outside of the react.

subscribe()  - it is a method on the Redux store. It lets you listen for changes in the store’s state. Whenever an action is dispatched and the state changes, your listener function is called automatically.

if i say in the simple word - subscribe() is tell “Hey Redux, tell me whenever the state changes so I can do something.”