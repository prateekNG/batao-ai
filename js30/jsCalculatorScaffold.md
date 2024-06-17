## Guide to Building a Calculator - Banjao Apna Calculator! 😎

This guide will help you build a cool calculator from scratch using HTML, CSS, and JavaScript. We'll go step-by-step, learning new things along the way. Ready to become a coding master? Let's go! 🚀

### Phase 1: Setting t
**Goal:** Let's create the basic structure of our calculator using HTML. Think of it like building the skeleton before we make it look good.

**Steps:**

1. **Create Your Playground:** Open your favorite text editor and create three files: `index.html`, `style.css`, and `script.js`. 

2. **Link the Trio:** Inside the `<head>` tag of your `index.html`, add these lines to link your CSS and JavaScript files:

   ```html
   <link rel="stylesheet" href="style.css">
   <script src="script.js" defer></script> 
   ```
   *(The `defer` attribute makes sure the JavaScript code runs after the HTML is loaded, preventing any issues.)*

3. **HTML Structure:** Now, let's add the HTML for the calculator inside the `<body>` tag of `index.html`.  We'll use `div` elements to structure our calculator and `button` elements for the keys.

   ```html
   <div class="container">
       <p>
         This component works exactly like the calculator you know. Click any number to start calculating!
       </p>
       <div class="calculator">
         <div class="calculator__display">0</div>

         <div class="calculator__keys">
           <button class="key--operator" data-action="add">+</button>
           <button class="key--operator" data-action="subtract">-</button>
           <button class="key--operator" data-action="multiply">&times;</button>
           <button class="key--operator" data-action="divide">÷</button>
           <button class="key--number" data-value="7">7</button>
           <button class="key--number" data-value="8">8</button>
           <button class="key--number" data-value="9">9</button>
           <button class="key--number" data-value="4">4</button>
           <button class="key--number" data-value="5">5</button>
           <button class="key--number" data-value="6">6</button>
           <button class="key--number" data-value="1">1</button>
           <button class="key--number" data-value="2">2</button>
           <button class="key--number" data-value="3">3</button>
           <button class="key--number" data-value="0">0</button>
           <button data-action="decimal">.</button>
           <button data-action="clear">AC</button>
           <button class="key--equal" data-action="calculate">=</button>
         </div>
       </div>
     </div>
   ```
   *We are adding `data-action` and `data-value` attributes to our buttons. This will be helpful later when we add JavaScript to handle button clicks.*

4. **Open in Browser:** Save your `index.html` file, and open it in your web browser. You should see a very basic, unstyled calculator layout. Don't worry, we'll add the looks in the next phase!

### Phase 2: Styling Our Calculator with CSS

**Goal:**  Let's add some style to our calculator using CSS and make it visually appealing!

**Steps:**

1.  **Basic Styling:** Open your `style.css` file and add the following CSS code. This will give our calculator a basic structure and appearance. Experiment with different colors and styles if you like!

    ```css
    /*  style.css  */
    body {
      align-items: center;
      background-image: linear-gradient(236deg, #74ebd5, #acb6e5);
      display: flex;
      height: 100vh;
      justify-content: center;
      font-family: sans-serif;
    }

    .calculator {
      border-radius: 12px;
      box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      max-width: 300px;
    }

    .calculator__display {
      background-color: #222222;
      color: #fff;
      font-size: 2em;
      padding: 10px;
      text-align: right;
    }

    .calculator__keys {
      background-color: #999;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2px; 
    }

    .calculator__keys > button {
      background-color: #fff;
      padding: 15px; 
      border: none;
      font-size: 1.2em;
      cursor: pointer;
    }

    .key--operator {
      background-color: #eee;
    }

    .key--equal {
      background-image: linear-gradient(to bottom, #fe886a, #ff7033);
      color: #fff;
      grid-column: span 2; 
    }
    ```

2. **Observe the Transformation:** Save your `style.css` file and refresh your `index.html` in the browser. Wow! Our calculator is starting to look like the real deal, right?

### Phase 3:  Adding Brains with JavaScript

**Goal:** Now, for the most exciting part! Let's use JavaScript to make our calculator actually work!

**Steps:**

1. **Get Elements:**  Open your `script.js` file.  First, we'll grab references to our display and buttons using their class names.

    ```javascript
    // script.js
    const display = document.querySelector('.calculator__display');
    const keys = document.querySelectorAll('.calculator__keys > button');
    ```
   *We are selecting all the buttons inside `.calculator__keys` to handle their clicks.*

2. **Handle Button Clicks:**  We'll add an event listener to each button that listens for clicks and performs the appropriate action. 

    ```javascript
    // ... (Previous Code)

    keys.forEach(key => {
      key.addEventListener('click', () => {
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if (action === 'clear') {
          display.textContent = '0';
        } else if (action === 'decimal') {
          display.textContent = displayedNum.includes('.') ? displayedNum : displayedNum + '.';
        } else if (!action) {
          display.textContent = displayedNum === '0' ? keyContent : displayedNum + keyContent;
        } else if (
          action === 'add' ||
          action === 'subtract' ||
          action === 'multiply' ||
          action === 'divide'
        ) {
          // We will handle calculations in the next steps.
          console.log('Operator button clicked!'); 
        } else if (action === 'calculate') {
          // We will handle calculations in the next steps.
          console.log('Calculate button clicked!'); 
        } 
      });
    });
    ```
   *We use `dataset` to access `data-action` attributes we set in HTML. Now, when you click buttons in your browser, you should see messages in the console (Right-click on your browser page and select "Inspect" or "Inspect Element" to open the developer tools and view the console).*


3. **Implement Calculation Logic:**  Let's add the logic to perform calculations.  We'll store the first number, the operator, and then calculate the result when the '=' button is clicked.

    ```javascript
    // ... (Previous Code)

    let firstValue = null;
    let operator = null;
    let isWaitingForSecondOperand = false;

    // ... (Inside the event listener)
    ...
    else if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      operator = action;
      firstValue = parseFloat(display.textContent);
      isWaitingForSecondOperand = true; 
    } else if (action === 'calculate') {
      if (firstValue !== null && operator && isWaitingForSecondOperand) {
        const secondValue = parseFloat(display.textContent);
        let result = 0;

        if (operator === 'add') {
          result = firstValue + secondValue;
        } else if (operator === 'subtract') {
          result = firstValue - secondValue;
        } else if (operator === 'multiply') {
          result = firstValue * secondValue;
        } else if (operator === 'divide') {
          result = firstValue / secondValue;
        }

        display.textContent = result;
        firstValue = result; // So you can chain calculations
        isWaitingForSecondOperand = false;
      }
    }
    ```

4. **Test It Out:**  Save your `script.js`, refresh your `index.html`, and try doing some calculations. 

#### Congratulations, you've built your own working calculator! 🎉 

#### Bonus Challenges:

* **Error Handling:** What happens if a user tries to divide by zero? Can you add error handling for this?
* **Keyboard Support:** Make the calculator work with keyboard input.
* **More Features:** Can you add more advanced features like square root, percentage, or memory functions?


Let me know if you have any questions or want to explore more cool features! 😊 
