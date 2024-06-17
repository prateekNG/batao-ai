## Step 4: Connecting UI to State and Actions

We have successfully set up our application's state management using the Context API and a reducer. In this step, we'll connect our UI components to this state, allowing them to both dispatch actions that modify the state and access the state to display updated information dynamically.

### Objectives

- Understand how to dispatch actions from UI components to update the global state.
- Learn how to access the state from UI components to render dynamic content.
- Implement the "Add to Basket" functionality for the `Product` component.
- Implement the "Remove from Basket" functionality for the `CheckoutProduct` component.
- Update the `Header` component to display the item count dynamically.
- Connect the `Subtotal` component to the basket state for total price calculation.

### 4.1 Dispatching Actions from UI Components

We'll start by connecting our `Product` component's "Add to Basket" button to the global state. 

1. **Open `src/components/Product.js` and import `useStateValue`:**

```javascript
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider"; // Import useStateValue

// ... (rest of the Product component code)
```

2. **Access the dispatch function within the component:**

```javascript
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue(); // Destructure dispatch

  const addToBasket = () => {
    // Dispatch the ADD_TO_BASKET action when the button is clicked
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
    // ... (rest of the Product component JSX) 
  );
}
```

**Explanation:**

- We use the `useStateValue()` hook to get access to the state and the dispatch function provided by our Context API.
- When the "Add to Basket" button is clicked, the `addToBasket` function is triggered.
- The `addToBasket` function dispatches an action of type `ADD_TO_BASKET` along with the product's information. This action will be sent to our reducer.

### 4.2 Removing Items from the Basket

We will implement a similar approach for removing items from the basket in the `CheckoutProduct` component.

1. **Open `src/components/CheckoutProduct.js`:**

2. **Implement the `removeFromBasket` function:**

```javascript
import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // Dispatch the REMOVE_FROM_BASKET action when the button is clicked
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id, 
    });
  };

  // ... (rest of your CheckoutProduct component)
}
```

**Explanation:**

-  Similar to the `Product` component, we access the `dispatch` function from `useStateValue`.
- The `removeFromBasket` function dispatches the `REMOVE_FROM_BASKET` action with the `id` of the product to be removed. Our reducer already has the logic to handle this action type.

### 4.3 Accessing State for Dynamic Content

Now, let's update the `Header` component to display the number of items in the basket dynamically.

1. **Open `src/components/Header.js`:**

2. **Access the basket state:**

```javascript
import React from "react";
import "./Header.css";
// ... (other imports)
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue(); // Get the basket from the state

  return (
    // ... (rest of the Header component JSX)
    <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav__itemLineTwo nav__basketCount">
                {basket?.length} {/* Display the length of the basket */}
            </span>
          </div>
    </Link>
    // ... (rest of the Header component JSX)

  );
}
```

**Explanation:**

- We access the `basket` array directly from the state using the `useStateValue` hook.
-  The length of the `basket` array (representing the number of items) is then displayed in the header. 

### 4.4 Connecting the Subtotal Component

Finally, let's connect the `Subtotal` component to calculate and display the total price of the items in the basket.

1. **Open `src/components/Subtotal.js`:**

2. **Import the `getBasketTotal` selector and use it:**

```javascript
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer"; // Import the selector

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* ... other JSX ... */}
            <CurrencyFormat
                // ...
                value={getBasketTotal(basket)} // Use the selector here
                // ... 
            />
            {/* ... other JSX ... */}
        </div>
    );
}
```

**Explanation:**

- We import the `getBasketTotal` selector that we defined in `reducer.js`.
- We pass the `basket` array to the selector, which calculates the total price and returns it. 

By completing this step, we've successfully connected our UI components to the centralized state. This connection enables us to build a dynamic and interactive user experience, where user actions directly impact the application's state, and the UI reflects those changes in real-time. 
