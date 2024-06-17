## Step 2: Building the User Interface (UI) Components

In this step, we'll bring our e-commerce site to life by creating the UI components using React. We'll be using Material-UI for pre-built components to speed up the styling process and focus on functionality.

### Objectives

- Create functional React components for each part of the UI (Header, Product, Home, CheckoutProduct, Checkout, Subtotal, Login).
- Implement basic styling for each component using CSS.
- Integrate Material UI icons for visual elements.
- Set up basic routing using `react-router-dom` to navigate between Home, Login, and Checkout pages.


Let's break down the process for each component:

### 2.1 Header Component

The Header will contain our logo, a search bar, navigation links, and the shopping basket.

1. **Create `src/components/Header.css` for styling:**

```css
.header {
    height: 60px; 
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header__logo {
    display: flex;
    align-items: center;
    color: #ff9f00;
    margin: 0 25px;
}

.header__logoImage {
    margin-right: 10px;
}

.header__logoTitle {
    text-decoration: none;
    border: 0;
    color: white;
}

.header__search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
    margin: 0 10px;
}

.header__searchInput {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
}

.header__searchIcon {
    padding: 5px;
    height: 22px !important;
    background-color: #ff9f00;
}

.header__nav {
    display: flex;
    justify-content: space-evenly;
}

.nav__item {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;  
    color: white;
}

.nav__itemLineOne {
    font-size: 10px;
}

.nav__itemLineTwo {
    font-size: 13px;
    font-weight: 800; 
}

.nav__itemBasket {
    display: flex;
    align-items: center;
    color: white;
    margin-right: 50px;
    margin-left: 10px;
}

.nav__basketCount {
    margin-left: 10px;
    margin-right: 10px;
}
```

2. **Implement the Header component in `src/components/Header.js`:**

```javascript
import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
          <Link to="/" style={{ textDecoration:"none" }}>
            <div className="header__logo">
                <StorefrontIcon className="header__logoImage" fontSize="large"/>
                <h2 className="header__logoTitle">eShop</h2>
            </div>
          </Link>
            

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
        <Link to="/login" style={{ textDecoration:"none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
        </div>
    )
}

export default Header
```

**Explanation:**

- We import necessary components from `react-router-dom` for routing.
- The `Link` component is used to create links to the home page ("/") and the login page ("/login").
- We use the `useStateValue` hook to access the `basket` from the context API to display the number of items in the basket dynamically.

### 2.2 Product Component

This component will represent a single product in our shop.

1. **Create `src/components/Product.css` for styling:**

```css
.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
    background-color: white;
    z-index: 1;
  }
  
  .product__rating {
    display: flex;
  }
  
  .product > img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin: 20px 0 0 15px;
  }
  
  .product > button {
    background: #ff9f00;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
  
  .product__price {
    margin-top: 5px;
  }
  
  .product__info {
    height: 100px;
    margin-bottom: 15px;
  }
```

2. **Implement the Product component in `src/components/Product.js`:**

```javascript
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
```

**Explanation:**

- The `Product` component receives product information (id, title, image, price, rating) as props.
- It uses `useStateValue` to access the dispatch function from the context.
- The `addToBasket` function dispatches an "ADD_TO_BASKET" action with the product information when the "Add to Basket" button is clicked, which will be handled by the reducer to update the basket state.

### 2.3 Home Component

This component will display a list of products and a hero banner.

1. **Create `src/components/Home.css` for styling:**

```css
.home {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
}
.home__image {
    width: 100%;
    height: 400px;
    z-index: -1;
    margin-bottom: -50px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.home__row {  
    display: flex; 
    z-index: 1; 
    margin-left: 5px;  
    margin-right: 5px;
}
```

2. **Implement the Home component in `src/components/Home.js`:**

```javascript
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={199.99}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>   
        </div> 
    )
}

export default Home
```

**Explanation:**

- The `Home` component renders a hero banner image and a grid of `Product` components.
- You can replace the placeholder product information with your own.


### 2.4 CheckoutProduct Component

This component will be used to display a product on the Checkout page.

1. **Create `src/components/CheckoutProduct.css` for styling:**

```css
.checkoutProduct {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
}

.checkoutProduct__info {
    padding-left: 20px
}

.checkoutProduct__info > button {
    background: #ff9f00;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
}

.checkoutProduct__image {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }

.checkoutProduct__rating {
    display: flex;
  }

.checkoutProduct__title {
    font-size: 17px;
    font-weight: 800;
}
```

2. **Implement the CheckoutProduct component in `src/components/CheckoutProduct.js`:**

```javascript
import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}
                </p>
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
    )
}

export default CheckoutProduct
```

**Explanation:**

- Similar to the `Product` component, `CheckoutProduct` displays product information.
- It also has a "Remove from Basket" button that dispatches a "REMOVE_FROM_BASKET" action to remove the item from the basket state.

### 2.5 Checkout Component

The Checkout component will display the items in the basket and the order subtotal.

1. **Create `src/components/Checkout.css` for styling:**

```css
.checkout {
    display: flex;
    padding: 20px;
    background-color: white;
    height: max-content;
}

.checkout__ad {
    width: 100%;
    margin-bottom: 10px;
}

.checkout__title {
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
}

.checkout__left {
    display: flex;
    flex-direction: column;
}
```

2. **Implement the Checkout component in `src/components/Checkout.js`:**

```javascript
import { SportsBasketball } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
```

**Explanation:**

- It accesses the `basket` from the context API.
- It maps over the `basket` array to render a `CheckoutProduct` component for each item.
- It includes the `Subtotal` component to display the total price.

### 2.6 Subtotal Component

This component will calculate and display the total price of all items in the basket.

1. **Create `src/components/Subtotal.css` for styling:**

```css
.subtotal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 3px;
}

.subtotal__gift {
    display: flex;
    align-items: center;
}

.subtotal__gift > input {
    margin-right: 5px;
}

.subtotal > button {
    background: #ff9f00;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
}
```

2. **Implement the Subtotal component in `src/components/Subtotal.js`:**

```javascript
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

 
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
```

**Explanation:**

- It utilizes the `CurrencyFormat` component from `react-currency-format` for formatting the price.
- It imports and uses the `getBasketTotal` selector function from the reducer to calculate the total price of all items in the basket.

### 2.7 Login component

The Login component will handle user authentication using Firebase.

1. **Create `src/components/Login.css` for styling:**

```css
.login {
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login__logo {
    display: flex;
    margin: 30px 0;
}

.login__logoImage {
    color: #ff9f00;
}

.login__logoTitle {
    color: black;
}

.login__container {
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
}

.login__container > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

.login__container > form > h5 {
    margin-bottom: 5px;
}

.login__container > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }

.login__container > p {
    margin-top: 15px;
    font-size: 12px;
}

.login__signInButton {
    background: #ff9f00;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
  }

  .login__registerButton {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
  }
```

2. **Implement the Login component in `src/components/Login.js`:**

```javascript
import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login;
```

**Explanation:**
- This component includes a simple form for email and password input.
- The `signIn` function handles user sign-in with Firebase authentication.
- The `register` function handles user registration.
- Upon successful sign-in/registration, it should redirect users to the home page.

After completing this step, you'll have the basic UI structure of your React e-commerce application. In the next step, you will connect these UI components to the state and actions using the Context API to manage the application's state efficiently.
