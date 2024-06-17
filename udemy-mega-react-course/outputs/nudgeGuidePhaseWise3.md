## Phase 3: Building E-commerce Functionality

### **Step 8: Creating the Checkout Page**

1.  **Enhance the Checkout Page Structure:** Open your `Checkout.js` file. Let's add a more informative structure with sections for displaying checkout products and order summary.

```jsx
// src/Checkout.js
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/*  We will map through the basket and render CheckoutProduct here */}
        </div>
      </div>
      
      <div className="checkout__right">
          {/* We will render our Subtotal component here */}
      </div>
    </div>
  );
}

export default Checkout;

```

### **Step 9: State Management with Context API**

1.  **Create a Context and Reducer:** Generate two files, `StateProvider.js` and `reducer.js`, within your `src` directory.

    *   **`StateProvider.js`**:

    ```jsx
    // src/StateProvider.js
    import React, { createContext, useContext, useReducer } from "react";

    // This will be our data layer
    export const StateContext = createContext();

    // Build a Provider
    export const StateProvider = ({ reducer, initialState, children }) => (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    );

    // This is how we will pull information from the data layer
    export const useStateValue = () => useContext(StateContext);
    ```

    *   **`reducer.js`**:

    ```javascript
    // src/reducer.js
    export const initialState = {
        basket: [],
    };

    const reducer = (state, action) => {
        // We listen to different actions being dispatched
        console.log(action);

        switch(action.type) {
            case "ADD_TO_BASKET":
                return {
                    // ...state means that we return the state as it originally was
                    ...state,
                    // Except, we modify the basket by adding whatever product (action.item)
                    // was passed to this reducer with ADD_TO_BASKET action
                    basket: [...state.basket, action.item],
                };

            default:
                return state;
        }
    };

    export default reducer;
    ```
2.  **Wrap your Application with the Provider:** Open your main `index.js` file. Wrap your `<App />` component with the `StateProvider`.

```jsx
// src/index.js
// Existing imports

import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";


ReactDOM.render(
  <React.StrictMode>
  {/* Here we provide the reducer to the root of the app  */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

### **Step 10: Adding Items to the Cart**

1.  **Implement Add to Basket Functionality:** In `Product.js`, implement the `addToBasket` function to dispatch the "ADD\_TO\_BASKET" action when the "Add to Basket" button is clicked.

    ```jsx
    // src/Product.js
    import React from "react";
    import "./Product.css";
    import { useStateValue } from "./StateProvider"; // Import useStateValue

    function Product({ id, title, image, price, rating }) {
      // Access dispatch to update the global state
      const [{ basket }, dispatch] = useStateValue(); 

      const addToBasket = () => {
        // Dispatch the action to add the product to the basket
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };

      return (
        <div className="product">
            {/* ... rest of your Product component... */}
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
      );
    }
    ```
2.  **Display Products in Checkout:** Update `Checkout.js` to map through the `basket` array and render `CheckoutProduct` components for each item.

    ```jsx
    // src/Checkout.js
    // ... existing imports ...

    function Checkout() {
        const [{ basket }, dispatch] = useStateValue();

        return (
            <div className="checkout">
                {/* ... (rest of your Checkout component) ... */}

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => ( 
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>

                {/* ... (rest of your Checkout component) ... */}
            </div>
        );
    }

    // ... (export statement) ...
    ```

### **Step 11: Removing Items from the Cart**

1.  **Implement Remove from Basket Functionality:** In `CheckoutProduct.js`, create a `removeFromBasket` function to dispatch the "REMOVE\_FROM\_BASKET" action.
2.  **Add Remove Button:** Add a button to `CheckoutProduct` that, when clicked, calls `removeFromBasket`.
3.  **Update Reducer:** Modify the reducer in `reducer.js` to handle the "REMOVE\_FROM\_BASKET" action and update the basket state accordingly.

```javascript
// src/reducer.js
// ... (initialState and other code from previous steps) ...

const reducer = (state, action) => {
  // ... (other cases) ...

  case "REMOVE_FROM_BASKET":
    // Logic to remove item from basket
    // Find the index of the item to remove
    const index = state.basket.findIndex(
      (basketItem) => basketItem.id === action.id
    );
    // Create a copy of the basket
    let newBasket = [...state.basket]; 

    if (index >= 0) {
      // If item exists in basket, remove it
      newBasket.splice(index, 1); 
    } else {
      console.warn(
        `Can't remove product (id: ${action.id}) as its not in basket!`
      );
    }

    return {
      ...state, 
      basket: newBasket,
    };

  default:
    return state;
  }
};

// ... (export default reducer) ...
```

```jsx
// src/CheckoutProduct.js
import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // dispatch the action to remove item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id, // Pass the id of the product to remove
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
```

By the end of Phase 3, users should be able to add and remove products from the cart, with these actions reflected in the global state and the Checkout page. This setup provides a solid foundation for expanding e-commerce features in the following phases.
