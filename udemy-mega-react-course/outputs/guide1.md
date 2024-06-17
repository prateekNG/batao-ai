## Building an eShop with React: A Step-by-Step Guide

This guide walks you through building a simplified e-commerce website ("eShop") using React. By the end, you will have a functional website where users can browse products, add them to a basket, and even simulate a checkout process.

### Project Setup

1. **Create React App:** Open your terminal and run the following command to create a new React project:

   ```bash
   npx create-react-app eshop
   cd eshop 
   ```

2. **Install Dependencies:** We'll be using Material-UI for icons and styling, React Router for navigation, and firebase for authentication. Install them using:

   ```bash
   npm install @material-ui/core @material-ui/icons react-router-dom firebase react-currency-format
   ```

### Building Blocks

#### 1. Header (`src/Header.js`)

   - **Purpose:** Displays the website's logo, search bar, navigation links, and the shopping basket.
   - **Key Concepts:** JSX, Components, Props, Styling, Routing (`react-router-dom`)
   - **Tasks:**
     - Create a functional component `Header`.
     - Implement basic layout using `div` elements with appropriate CSS classes (see `Header.css`).
     - Use Material UI icons for storefront, search, and shopping basket.
     - Use `Link` from `react-router-dom` to create navigation links to the home page (`/`), login page (`/login`), and checkout page (`/checkout`). 

#### 2. Home Page (`src/Home.js`)

   - **Purpose:** Showcases a grid of products available in the eShop.
   - **Key Concepts:** Components, Props, JSX, Styling
   - **Tasks:**
     - Create a functional component `Home`.
     - Include an image banner at the top.
     - Create a `Product` component (see below) to display individual product details.
     - Arrange products in rows using `div` elements and CSS grid or flexbox.

#### 3. Product Component (`src/Product.js`)

   - **Purpose:** Displays information for a single product.
   - **Key Concepts:** Components, Props, State, Event Handling
   - **Tasks:**
     - Create a functional component `Product` that accepts `id`, `title`, `image`, `price`, and `rating` as props.
     - Display these props in a user-friendly layout.
     - Implement an "Add to Basket" button that updates the application state to reflect the added item (more on this later).

#### 4. Checkout Page (`src/Checkout.js`)

   - **Purpose:** Displays the items added to the basket and a subtotal.
   - **Key Concepts:** Components, State, Props, Conditional Rendering
   - **Tasks:**
     - Create a functional component `Checkout`.
     - Implement a mechanism to access and display the items stored in the basket (we'll use the Context API later for this).
     - Create a `CheckoutProduct` component (see below) to display individual product details on the checkout page.
     - Display a subtotal of all items in the basket.

#### 5. Checkout Product Component (`src/CheckoutProduct.js`)

   - **Purpose:** Similar to the `Product` component, but tailored for the checkout page with the option to remove items.
   - **Key Concepts:** Components, Props, State, Event Handling
   - **Tasks:**
     - Create a functional component `CheckoutProduct` that accepts similar props as `Product`.
     - Implement a "Remove from Basket" button that updates the application state to remove the item.

#### 6. State Management with Context API (`src/StateProvider.js`, `src/reducer.js`)

   - **Purpose:** Provides a way to manage the application's state globally, such as the items in the basket.
   - **Key Concepts:** Context API, Reducers, Actions
   - **Tasks:**
     - Create a `StateProvider` component that will wrap our app and provide the global state.
     - Define a `reducer` function that handles state updates based on dispatched actions.
     - Define initial state for the application (e.g., `basket: []`).
     - Update the `Product` and `CheckoutProduct` components to interact with the global state (add/remove items).

#### 7. Authentication with Firebase (`src/Login.js`, `src/firebase.js`)

   - **Purpose:** Allows users to log in and potentially manage their accounts in the future.
   - **Key Concepts:** Firebase Authentication, Forms, Routing
   - **Tasks:**
     - Set up a new Firebase project and enable email/password authentication.
     - Create a `Login` component with a form for email and password.
     - Use Firebase Authentication to handle user sign-in.
     - Implement routing logic to redirect authenticated users.

### Putting It All Together

1. **Import Components:** Import all necessary components into `App.js`.
2. **Set up Routing:** Implement routing using `react-router-dom` to navigate between the Home, Checkout, and Login pages.
3. **Wrap with StateProvider:** Wrap your main app component with the `StateProvider` to provide access to the global state.

### Additional Features and Enhancements

- **Product Details Page:** Create a dedicated page to display more information about a selected product.
- **Search Functionality:** Implement search functionality to filter products.
- **User Profile:** Allow users to view and edit their profile information.
- **Payment Integration:** Integrate a payment gateway for processing transactions.

This structured guide will help you understand the project's flow and equip you with the knowledge to build a basic e-commerce web application using React. Remember to refer to the original project files for code snippets, styling details, and inspiration. Happy coding! 
