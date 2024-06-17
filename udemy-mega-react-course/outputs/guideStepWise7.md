## Step 7: Connecting Everything Together 

This step focuses on integrating the components built in the previous steps and bringing our e-commerce website to life. We'll implement product display on the home page, add-to-basket functionality, a functional checkout page, and user authentication using Firebase. 

### Objectives

- Render product information dynamically on the home page using the `Product` component.
- Implement the "Add to Basket" functionality to update the basket state using context API.
- Configure routing to navigate between the home page, checkout page, and login page.
- Integrate Firebase authentication into the login page for user sign-in and registration. 

### 7.1 Rendering Products on the Home Page

1. **Import Components:** In `src/components/Home.js`, import the `Product` component: 
   ```javascript 
   import Product from "./Product";
   ```
2. **Create Product Data:** For simplicity, we'll hardcode product data within the `Home` component. In a real-world scenario, this data would likely be fetched from an API or database.  Add the following product data inside the `Home` component's `return` statement before the divs with className `home__row`:
   ```javascript
   const products = [
     {
       id: "12321341",
       title:
         "Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)",
       price: 11.96,
       rating: 5,
       image:
         "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg",
     },
     {
       id: "49538094",
       title: "IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)",
       price: 239.0,
       rating: 4,
       image:
         "https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg",
     },
     // Add more products here...
   ];
   ```

3. **Map Product Data to Components:** Utilize JavaScript's `map` function to dynamically create `Product` components for each product in the `products` array. Replace the existing code within the `home__row` divs with:
   ```javascript
   <div className="home__row">
     {products.slice(0, 2).map((product) => (
       <Product
         key={product.id}
         id={product.id}
         title={product.title}
         price={product.price}
         rating={product.rating}
         image={product.image}
       />
     ))}
   </div>
   <div className="home__row">
     {products.slice(2, 5).map((product) => (
       <Product
         key={product.id}
         id={product.id}
         title={product.title}
         price={product.price}
         rating={product.rating}
         image={product.image}
       />
     ))}
   </div>
   <div className="home__row">
     {products.slice(5).map((product) => (
       <Product
         key={product.id}
         id={product.id}
         title={product.title}
         price={product.price}
         rating={product.rating}
         image={product.image}
       />
     ))}
   </div>
   ```

4. **Add Key Prop:** Ensure each `Product` component has a unique `key` prop (we use `product.id`) for React's efficient rendering.

### 7.2 Implementing Add to Basket Functionality

1. **Import `useStateValue`:**  In `Product.js`, import `useStateValue` to access the global state: 
   ```javascript
   import { useStateValue } from "./StateProvider";
   ```
2. **Access Dispatch Function:** Destructure the `dispatch` function from `useStateValue`: 
   ```javascript
   const [{ basket }, dispatch] = useStateValue(); 
   ```
3. **Create `addToBasket` Function:** Define the `addToBasket` function within the `Product` component to handle adding items to the basket.  
   ```javascript
   const addToBasket = () => {
     // Dispatch the action to the reducer
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
   ```
4. **Attach `addToBasket` to Button:** Attach this function to the "Add to Basket" button within the `Product` component: 
   ```javascript
   <button onClick={addToBasket}>Add to Basket</button>
   ```

### 7.3 Setting Up Routing

1. **Import Routing Components:**  In `src/App.js`, import the necessary components from `react-router-dom`:
   ```javascript
   import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
   ```
2. **Wrap with Router:** Wrap the main `App` component with the `BrowserRouter` component. 
   ```javascript
    return (
        <div className="App">
            <Router>
                {/* ...rest of your application... */}
            </Router>
        </div>
    )
   ```
3. **Define Routes:** Define the routes for the home page (`/`), checkout page (`/checkout`), and login page (`/login`):
   ```javascript
   <Router>
     <Switch> {/* Ensure only one route is matched at a time */}
       <Route path="/login">
         <Login /> 
       </Route>
       <Route path="/checkout">
         <Header />
         <Checkout />
       </Route>
       <Route path="/"> {/* Default route for the home page */}
         <Header /> 
         <Home /> 
       </Route>
     </Switch>
   </Router>
   ```

### 7.4 Implementing Firebase Authentication in Login

1. **Import Firebase Authentication:** In `src/components/Login.js`, import `auth` from your Firebase configuration file:
   ```javascript
   import { auth } from "./firebase"; 
   ```
2. **Implement `signIn` Function:** Implement the `signIn` function that will be triggered when the user clicks the "Sign In" button:
   ```javascript
   const signIn = (e) => {
     e.preventDefault(); // Prevent the default form submission 

     auth
       .signInWithEmailAndPassword(email, password)
       .then((auth) => {
         // Successfully signed in
         history.push("/"); // Redirect to the home page
       })
       .catch((error) => alert(error.message)); 
   };
   ```
3. **Implement `register` Function:**  Implement the `register` function for new user registration: 
   ```javascript
   const register = (e) => {
     e.preventDefault(); 
     
     auth
       .createUserWithEmailAndPassword(email, password)
       .then((auth) => {
         // Successfully created a new user
         if (auth) {
           history.push("/"); 
         }
       })
       .catch((error) => alert(error.message)); 
   };
   ```
4. **Attach Functions to Buttons:** In the `Login` component's JSX, attach the `signIn` function to the "Sign In" button and the `register` function to the "Create your eShop Account" button. 
   ```javascript
   <button type="submit" onClick={signIn} className="login__signInButton">
     Sign In
   </button>

   <button onClick={register} className="login__registerButton">
     Create your eShop Account
   </button>
   ```

You have now successfully implemented the core functionalities of your e-commerce application! You can start the application by running `npm start`. Test the user authentication, add products to your basket, and proceed to checkout. In the next steps, you can explore additional features like payment integration, order management, and more. 
