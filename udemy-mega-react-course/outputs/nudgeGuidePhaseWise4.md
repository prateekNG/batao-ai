## Phase 4: User Authentication

### **Step 12: Setting up Firebase Authentication**

1.  **Create a Firebase Project:**
    *   Go to [https://firebase.google.com/](https://firebase.google.com/) and create a new Firebase project.
    *   Follow the instructions to set up your project. You'll likely need to create a new Firebase web app.
2.  **Enable Email/Password Authentication:**
    *   In your Firebase project console, navigate to "Authentication".
    *   Select "Get Started" and enable the "Email/Password" provider.
3.  **Install Firebase in your React Project:**

```bash
npm install firebase
```

1.  **Create a Firebase Configuration File:**
    *   Create a file named `firebase.js` inside your `src` folder.
    *   Copy your Firebase web app configuration from the Firebase console (it should look like the code snippet below) and paste it into `firebase.js`.
    *   Initialize Firebase and export the necessary objects (like `auth` for authentication and `db` for Firestore if you plan to use it).

    ```javascript
    // src/firebase.js
    import firebase from "firebase";

    const firebaseConfig = {
        // Your Firebase project configuration goes here
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore(); // Export Firestore if you'll use it
    const auth = firebase.auth(); // Export auth for user authentication

    export { db, auth }; // Export the objects you need
    ```

### **Step 13: Creating a Login Page**

1.  **Build the Login Component Structure:**
    *   Open the `Login.js` file.
    *   Craft a simple login form using HTML, including input fields for email and password, and buttons for "Sign In" and "Create Account".

    ```jsx
    // src/Login.js
    import React, { useState } from 'react';
    import './Login.css'; // Import your CSS file for styling
    import { Link, useHistory } from "react-router-dom";
    import StorefrontIcon from '@material-ui/icons/Storefront';
    import { auth } from "./firebase";

    function Login() {
        // ... we will add state variables and functions here later

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
                        <input type='text'  /> {/* Add onChange handler later */}

                        <h5>Password</h5>
                        <input type='password' /> {/* Add onChange handler later */}

                        <button type='submit' className='login__signInButton' >Sign In</button> {/* Add onClick handler later */}
                    </form>

                    <p>
                        By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className='login__registerButton'>Create your eShop Account</button> {/* Add onClick handler later */}
                </div>
            </div>
        );
    }

    export default Login;
    ```

2.  **Implement Login Functionality:**
    *   Within `Login.js`, import `useState` to manage the email and password input values.
    *   Create two state variables: `email` and `password`, initialized as empty strings.
    *   Attach `onChange` handlers to the input fields to update these state variables whenever the input values change.
    *   Implement the `signIn` function that will be called when the "Sign In" button is clicked.
    *   Inside `signIn`, prevent default form submission and use `auth.signInWithEmailAndPassword(email, password)` from Firebase to sign in the user.
    *   Handle successful login (e.g., redirect to the home page) and potential errors (display an error message).

    ```jsx
    // Inside src/Login.js
    // ... (other imports)

    function Login() {
        const history = useHistory(); // For redirecting after login
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const signIn = e => {
            e.preventDefault(); // Prevent default form submission

            // Firebase login logic
            auth
                .signInWithEmailAndPassword(email, password)
                .then(auth => {
                    // Successfully signed in, redirect to home page
                    history.push('/');
                })
                .catch(error => alert(error.message)); // Handle errors
        };

        // ... (rest of your Login component)
    }
    ```

3.  **Implement Registration Functionality:**
    *   Implement the `register` function, which will be called when the "Create Account" button is clicked.
    *   Inside `register`, use `auth.createUserWithEmailAndPassword(email, password)` to create a new user in Firebase.
    *   Like with `signIn`, handle success (e.g., redirect to home page) and potential errors (display an error message).

    ```jsx
    // Inside src/Login.js
    // ... (other code)

    const register = e => {
        e.preventDefault();

        // Firebase registration logic
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // Successfully created a new user
                if (auth) {
                    history.push('/'); // Redirect to home page
                }
            })
            .catch(error => alert(error.message)); // Handle errors
    };

    // ... (rest of your Login component)
    ```

4.  **Add the Login Route:**
    *   In `App.js`, import the `Login` component.
    *   Add a new route for `/login` within your `Switch` component to render the `Login` page when the URL matches.

    ```jsx
    // src/App.js
    // ... other imports

    function App() {
        // ...

        return (
            <div className="App">
                <Router>
                    <Switch>
                        {/* ... other routes ... */}
                        <Route path="/login">
                            <Login /> 
                        </Route>
                        {/* ... other routes ... */}
                    </Switch>
                </Router>
            </div>
        );
    }
    ```

After completing Phase 4, users should be able to register, log in, and be redirected accordingly. Remember that this phase focuses on setting up basic user authentication. For a production-ready app, you'll need to implement more robust error handling, input validation, and potentially password reset functionality.

By providing this level of detail and code snippets, students can focus on understanding the core concepts of React and Firebase authentication while also gaining practical experience in building a real-world feature. They are encouraged to consult external documentation and explore further to solidify their understanding.
