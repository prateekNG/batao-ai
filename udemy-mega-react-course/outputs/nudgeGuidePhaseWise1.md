## Phase 1: Setting up the Foundation

### **Step 1: Project Initialization**

1.  **Install Node.js and npm:** Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).
2.  **Open your terminal and create a new React project using Create React App:**

```bash
npx create-react-app my-ecommerce-app
cd my-ecommerce-app
```

Replace "my-ecommerce-app" with your preferred project name.

3.  **Start the development server:**

```bash
npm start
```

This command starts the development server and typically opens your default web browser, displaying a basic React app.

4.  **Explore the Project Structure:** Familiarize yourself with the generated files and folders. Pay close attention to:

    *   **`public/index.html`**: The single HTML page of your React app. React will inject its components into the `root` element within this file.
    *   **`src/index.js`**: The entry point of your React application, where you connect your root component to the `index.html` file.
    *   **`src/App.js`**: The main component of your application where we will write the core logic for our e-commerce website.
    *   **`src/index.css`**: Global CSS styles.
    *   **`src/App.css`**: CSS styles specific to the `App` component.

### **Step 2: Crafting the Header**

1.  **Create a Header Component:** In the `src` folder, create a new file named `Header.js`.
2.  **Build the Basic Structure:** Let's add a simple header with a logo and placeholder navigation links.

    ```jsx
    // src/Header.js
    import React from "react";
    import "./Header.css";

    function Header() {
        return (
            <div className="header">
                <div className="header__logo">
                    {/* Add a logo here */}
                    <h2 className="header__logoTitle">eShop</h2>
                </div>
                <div className="header__nav">
                    {/* Add navigation links here */}
                </div>
            </div>
        );
    }

    export default Header;
    ```

3.  **Add CSS Styling:** Create a file named `Header.css` in the `src` folder. Paste the following CSS to give your header a basic style:

    ```css
    // src/Header.css
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

    .header__logoTitle {
        text-decoration: none;
        border: 0;
        color: white;
    }

    .header__nav {
        display: flex;
        justify-content: space-evenly;
    }
    ```

### **Step 3: Constructing the Home Page**

1.  **Create a Home Component:** Similar to Step 2, create a file named `Home.js` inside the `src` folder.

2.  **Set up the Basic Structure:** Inside `Home.js`, create a simple layout for your homepage:

    ```jsx
    // src/Home.js
    import React from "react";
    import "./Home.css";

    function Home() {
        return (
            <div className="home">
                {/* Add home page content here */}
            </div>
        );
    }

    export default Home;

    ```

3.  **Include Components in `App.js`:** Import the newly created `Header` and `Home` components into your main `App.js` file:

    ```jsx
    // src/App.js
    import './App.css';
    import Header from './Header';
    import Home from './Home';

    function App() {
        return (
            <div className="App">
                <Header />
                <Home />
            </div>
        );
    }

    export default App;

    ```

4.  **Add Basic Styling:** Create `Home.css` in the `src` folder to add styling to your home page:

```css
// src/Home.css
.home {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
}

```

At this point, you should have a basic React project set up with a header and a home page. Remember to stop and restart your development server whenever you make changes to see them reflected in your browser.
