## Phase 2: Dynamic Content and Routing

### **Step 4: Introducing Product Data**

1.  **Create a Product Data File:** In your `src` folder, create a new JavaScript file named `data.js`.
2.  **Populate with Sample Data:** Within `data.js`, define an array of product objects. Each object should contain the following properties:

    *   `id`: A unique identifier for the product (you can use numbers or strings).
    *   `title`: The name of the product.
    *   `price`: The price of the product (you can use numbers).
    *   `rating`: A rating for the product (out of 5, using numbers).
    *   `image`: A URL pointing to an image of the product.

```javascript
// src/data.js
const products = [
    {
        id: "12321341",
        title: "Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)",
        price: 11.96,
        rating: 5,
        image: "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
    },
    {
        id: "49538094",
        title: "IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)",
        price: 239.0,
        rating: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
    },
    // Add more products here...
];

export default products;
```

### **Step 5: Implementing Product Display**

1.  **Modify the `Product.js` Component:** Open the existing `Product.js` file in your `src` folder.
2.  **Replace Placeholders with Props:** Inside the `Product` function, replace the placeholders you created earlier with dynamic content retrieved from props. You'll receive the product data as an object named `props`.

    ```jsx
    // src/Product.js
    import React from "react";
    import "./Product.css";

    function Product(props) {
        return (
            <div className="product">
                <div className="product__info">
                    <p>{props.title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(props.rating) // Create an array from the rating value
                        .fill()           // Fill the array with empty values
                        .map((_, i) => ( // Map over the array to render stars
                            <p key={i}>⭐</p> // Use "key" for React to efficiently update the list
                        ))}
                    </div>
                </div>

                <img src={props.image} alt={props.title} />

                <button>Add to Basket</button>
            </div>
        );
    }

    export default Product;

    ```

### **Step 6: Utilizing Props for Dynamic Rendering**

1.  **Import Product Data and the `Product` component:** In your `Home.js` file, import the `products` array from `data.js` and the `Product` component.

    ```jsx
    // src/Home.js
    import React from "react";
    import "./Home.css";
    import Product from "./Product";
    import products from "./data"; // Import product data

    // ... rest of your Home component
    ```

2.  **Map Product Data to Components:** In your `Home.js` file, map over the `products` array to render a `Product` component for each product object. Pass the product data as props to each `Product` component.

    ```jsx
    // src/Home.js
    // ... (import statements from previous step)

    function Home() {
        return (
            <div className="home">
                <div className="home__container">
                    {/* ... your existing image banner ... */}

                    <div className="home__row">
                        {products.map(product => (
                            <Product 
                                key={product.id} // Assign a unique key to each product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                            />
                        ))}
                    </div>

                    {/* You can add more home__row divs and map products as needed */}
                </div>   
            </div> 
        );
    }

    // ... (export statement)
    ```

### **Step 7: Integrating React Router**

1.  **Install React Router:** In your terminal, install the React Router DOM package.

    ```bash
    npm install react-router-dom
    ```

2.  **Set up the Router:** Wrap your main `App` component in `BrowserRouter` from `react-router-dom`.

    ```jsx
    // src/App.js
    import React from 'react';
    import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    import './App.css';
    import Checkout from './Checkout';
    import Header from './Header';
    import Home from './Home';

    function App() {
    return (
        <Router> 
        <div className="App">
            {/* Header will remain consistent across pages */}
            <Header />

            <Switch>
            {/* Use exact for the home route to prevent it from matching all routes */}
            <Route exact path="/"> 
                <Home />
            </Route>

            <Route path="/checkout">
                <Checkout />
            </Route>

            {/* Other routes can be added here later */}
            </Switch>
        </div>
        </Router>
    );
    }

    export default App;

    ```

3.  **Create Links:** Use `Link` from `react-router-dom` to navigate between the Home and Checkout pages.

    *   In `Header.js`, wrap the shopping cart icon with a `Link` to `/checkout`.
    *   You can create additional links in your application as needed.

    ```jsx
    // src/Header.js
    import React from "react";
    import "./Header.css";
    import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
    import StorefrontIcon from '@material-ui/icons/Storefront';
    import SearchIcon from '@material-ui/icons/Search';
    import { Link } from "react-router-dom"; // Import Link

    function Header() {
        // ... your existing header content ...

        return (
            <div className="header">
                {/* ... your existing logo ... */}

                <div className="header__nav">
                    {/* ... your existing navigation links ... */}

                    <Link to="/checkout" style={{ textDecoration: "none" }}> {/* Wrap with Link */}
                        <div className="nav__itemBasket">
                            <ShoppingBasketIcon/>
                            <span className="nav__itemLineTwo nav__basketCount">0</span>
                        </div>
                    </Link> {/* Close the Link tag */}
                </div>
            </div>
        );
    }
    ```

At this point, your application should display dynamically generated products on the home page and allow navigation between the Home page and a basic Checkout page using React Router.
