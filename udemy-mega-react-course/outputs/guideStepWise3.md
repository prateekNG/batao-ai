## Step 3: State Management with Context API

In this step, we'll implement state management in our e-commerce application using the Context API. This will allow us to manage the application's state, particularly the shopping basket, in a centralized and efficient way, making it accessible to different components without prop drilling.

### Objectives

- Understand the concept of state management in React and why it is crucial.
- Learn how to use the Context API in a React application.
- Implement a global state for managing the shopping basket.
- Create a reducer function to handle state updates based on specific actions.

### 3.1 Creating the Context and Initial State

1. **Create `src/StateProvider.js`:** This file will hold our context object and the logic to provide the state to our application.

```javascript
import React, { createContext, useContext, useReducer } from "react";

// Create the context object
export const StateContext = createContext();

// Create the StateProvider component that will wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Export the useStateValue hook for accessing state and dispatch
export const useStateValue = () => useContext(StateContext);
```

**Explanation:**

- We create a context object using `createContext()`.
- The `StateProvider` component uses the `useReducer` hook. This hook manages our state and updates it based on the actions dispatched. 
- The `useStateValue` hook is a custom hook that allows components to easily access the context's value, which includes both the state and the dispatch function.

2. **Define the initial state in `src/reducer.js`:** 

```javascript
// src/reducer.js

export const initialState = {
  basket: [], // The basket will start as an empty array
}; 

// ... (Rest of the reducer.js file, we'll implement the reducer function next)
```

### 3.2 Implementing the Reducer Function

The reducer function is the heart of our state management. It takes the current state and an action as arguments and returns a new state based on the action. 

**Update `src/reducer.js` with the following:**

```javascript
// src/reducer.js

export const initialState = {
    basket: [],
};

//Selector
export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => item.price + amount, 0));
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, // Keep the existing state
        basket: [...state.basket, action.item], // Add the new item to the basket
      };

    case "REMOVE_FROM_BASKET":
        // Logic for removing item from basket (we will implement this in step 4)
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        );

        let newBasket = [...state.basket];

        if (index>=0) {
            newBasket.splice(index, 1);
        } else {
            console.warn(
                `Can't remove product(id: ${action.id}) as its not in the basket!`
            )
        }

        return {
            ...state,
            basket: newBasket
        }
    default:
      return state; // If action type doesn't match, return the current state
  }
};

export default reducer;
```

**Explanation:**

- **`ADD_TO_BASKET`**: This action will be dispatched when a user clicks the "Add to Basket" button on a product.  The reducer adds the new item to the basket while keeping the existing items.
- **`REMOVE_FROM_BASKET`**: (We'll implement the logic for this action in a later step) - This action will be dispatched when the user clicks "Remove from Basket." 
- **`default`**: It's essential to have a default case in the reducer. If the reducer encounters an action it doesn't recognize, it should return the current state without any modifications.

### 3.3 Wrapping the App Component with the Provider

To make our state accessible throughout the application, we need to wrap our main `App` component with the `StateProvider`.

**Update `src/index.js`:**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider"; // Import StateProvider

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}> 
      <App /> 
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

Now, any component within our `App` component can access the state and dispatch function provided by the context.

By completing this step, we've set up the foundation for global state management in our application. In the next step, we'll connect our UI components to this state, allowing them to read from and update the state based on user interactions.
