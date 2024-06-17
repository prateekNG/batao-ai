## Source Code Part 1:
HTML:
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
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>0</button>
        <button data-action="decimal">.</button>
        <button data-action="clear">AC</button>
        <button class="key--equal" data-action="calculate">=</button>
      </div>
    </div>
  </div>
```
CSS:
```css
// NOTE: You don't need to mess around with 
// CSS to follow the tutorial. Focus on the 
// JavaScript instead!
// =========================

// Some personal resets
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
}

/* Responsive Images */

embed,
iframe,
img,
object,
video {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding-right: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
}

a:focus {
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  display: block;
}

/* Removes all decimals and discs from lists */

ol,
ul {
  list-style: none;
}

/* 
 * Completely resets form items
 * ----------------------------
 * Super hard reset that removes all borders
 * and radiuses of all form items (including
 * checkboxes and radios)
 */

input,
textarea,
button {
  border: 0;
  border-radius: 0;
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  outline: none;
  appearance: none;
  text-align: left;
}

input:hover,
input:active,
input:focus,
textarea:hover,
textarea:active,
textarea:focus,
button:hover,
button:active,
button:focus {
  outline: none;
}

:root {
  font-family: Helvetica, Arial, sans-serif;
}

html {
  font-size: 175%;
  font-weight: 300;
  line-height: 1.3;
}

body {
  align-items: center;
  background-image: linear-gradient(236deg, #74ebd5, #acb6e5);
  display: flex;
  height: 100vh;
  justify-content: center;
}

.container {
  max-width: 20em;
}

.container > p {
  text-align: center;
}

.calculator {
  border-radius: 12px;
  box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  max-width: 15em;
  overflow: hidden;
}

.calculator__display {
  background-color: #222222;
  color: #fff;
  font-size: 1.714285714em;
  padding: 0.5em 0.75em;
  text-align: right;
}

.calculator__keys {
  background-color: #999;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(4, 1fr);
}

.calculator__keys > * {
  background-color: #fff;
  padding: 0.5em 1.25em;
  position: relative;
  text-align: center;
}

.calculator__keys > *:active::before,
.calculator__keys > .is-depressed::before {
  background-color: rgba(0, 0, 0, 0.2);
  bottom: 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5) inset;
  content: "";
  left: 0;
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.key--operator {
  background-color: #eee;
}

.key--equal {
  background-image: linear-gradient(to bottom, #fe886a, #ff7033);
  grid-column: -2;
  grid-row: 2 / span 4;
}
```
JavaScript:
```js
// NOTE: 
// This is the final source code file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }

  return result
}

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
    }

    if (action === 'clear') {
      console.log('clear key!')
    }

    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      display.textContent = calculate(firstValue, operator, secondValue)
    }
  }
})
```

## Source Code Part 2:
HTML:
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
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>0</button>
        <button data-action="decimal">.</button>
        <button data-action="clear">AC</button>
        <button class="key--equal" data-action="calculate">=</button>
      </div>
    </div>
  </div>
```

CSS:
```css
// NOTE: You don't need to mess around with 
// CSS to follow the tutorial. Focus on the 
// JavaScript instead!
// =========================

// Some personal resets
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
}

/* Responsive Images */

embed,
iframe,
img,
object,
video {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding-right: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
}

a:focus {
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  display: block;
}

/* Removes all decimals and discs from lists */

ol,
ul {
  list-style: none;
}

/* 
 * Completely resets form items
 * ----------------------------
 * Super hard reset that removes all borders
 * and radiuses of all form items (including
 * checkboxes and radios)
 */

input,
textarea,
button {
  border: 0;
  border-radius: 0;
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  outline: none;
  appearance: none;
  text-align: left;
}

input:hover,
input:active,
input:focus,
textarea:hover,
textarea:active,
textarea:focus,
button:hover,
button:active,
button:focus {
  outline: none;
}

:root {
  font-family: Helvetica, Arial, sans-serif;
}

html {
  font-size: 175%;
  font-weight: 300;
  line-height: 1.3;
}

body {
  align-items: center;
  background-image: linear-gradient(236deg, #74ebd5, #acb6e5);
  display: flex;
  height: 100vh;
  justify-content: center;
}

.container {
  max-width: 20em;
}

.container > p {
  text-align: center;
}

.calculator {
  border-radius: 12px;
  box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  max-width: 15em;
  overflow: hidden;
}

.calculator__display {
  background-color: #222222;
  color: #fff;
  font-size: 1.714285714em;
  padding: 0.5em 0.75em;
  text-align: right;
}

.calculator__keys {
  background-color: #999;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(4, 1fr);
}

.calculator__keys > * {
  background-color: #fff;
  padding: 0.5em 1.25em;
  position: relative;
  text-align: center;
}

.calculator__keys > *:active::before,
.calculator__keys > .is-depressed::before {
  background-color: rgba(0, 0, 0, 0.2);
  bottom: 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5) inset;
  content: "";
  left: 0;
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.key--operator {
  background-color: #eee;
}

.key--equal {
  background-image: linear-gradient(to bottom, #fe886a, #ff7033);
  grid-column: -2;
  grid-row: 2 / span 4;
}
```

JavaScript:
```js
// NOTE: 
// This is the final source code file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-2

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }

  return result
}

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    if (!action) {
      if (
        displayedNum === '0' ||
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
      calculator.dataset.previousKeyType = 'number'
    }

    if (action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.'
      } else if (
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        display.textContent = '0.'
      }

      calculator.dataset.previousKeyType = 'decimal'
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      if (
        firstValue &&
        operator &&
        previousKeyType !== 'operator' &&
        previousKeyType !== 'calculate'
      ) {
        const calcValue = calculate(firstValue, operator, secondValue)
        display.textContent = calcValue
        calculator.dataset.firstValue = calcValue
      } else {
        calculator.dataset.firstValue = displayedNum
      }

      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.operator = action
    }

    if (action === 'clear') {
      if (key.textContent === 'AC') {
        calculator.dataset.firstValue = ''
        calculator.dataset.modValue = ''
        calculator.dataset.operator = ''
        calculator.dataset.previousKeyType = ''
      } else {
        key.textContent = 'AC'
      }

      display.textContent = 0
      calculator.dataset.previousKeyType = 'clear'
    }

    if (action !== 'clear') {
      const clearButton = calculator.querySelector('[data-action=clear]')
      clearButton.textContent = 'CE'
    }

    if (action === 'calculate') {
      let firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      let secondValue = displayedNum

      if (firstValue) {
        if (previousKeyType === 'calculate') {
          firstValue = displayedNum
          secondValue = calculator.dataset.modValue
        }

        display.textContent = calculate(firstValue, operator, secondValue)
      }

      calculator.dataset.modValue = secondValue
      calculator.dataset.previousKeyType = 'calculate'
    }
  }
})
```

## Source Code Part 3:
HTML:
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
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>0</button>
        <button data-action="decimal">.</button>
        <button data-action="clear">AC</button>
        <button class="key--equal" data-action="calculate">=</button>
      </div>
    </div>
  </div>
```

CSS:
```css
// NOTE: You don't need to mess around with 
// CSS to follow the tutorial. Focus on the 
// JavaScript instead!
// =========================

// Some personal resets
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
}

/* Responsive Images */

embed,
iframe,
img,
object,
video {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding-right: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
}

a:focus {
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  display: block;
}

/* Removes all decimals and discs from lists */

ol,
ul {
  list-style: none;
}

/* 
 * Completely resets form items
 * ----------------------------
 * Super hard reset that removes all borders
 * and radiuses of all form items (including
 * checkboxes and radios)
 */

input,
textarea,
button {
  border: 0;
  border-radius: 0;
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  outline: none;
  appearance: none;
  text-align: left;
}

input:hover,
input:active,
input:focus,
textarea:hover,
textarea:active,
textarea:focus,
button:hover,
button:active,
button:focus {
  outline: none;
}

:root {
  font-family: Helvetica, Arial, sans-serif;
}

html {
  font-size: 175%;
  font-weight: 300;
  line-height: 1.3;
}

body {
  align-items: center;
  background-image: linear-gradient(236deg, #74ebd5, #acb6e5);
  display: flex;
  height: 100vh;
  justify-content: center;
}

.container {
  max-width: 20em;
}

.container > p {
  text-align: center;
}

.calculator {
  border-radius: 12px;
  box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  max-width: 15em;
  overflow: hidden;
}

.calculator__display {
  background-color: #222222;
  color: #fff;
  font-size: 1.714285714em;
  padding: 0.5em 0.75em;
  text-align: right;
}

.calculator__keys {
  background-color: #999;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(4, 1fr);
}

.calculator__keys > * {
  background-color: #fff;
  padding: 0.5em 1.25em;
  position: relative;
  text-align: center;
}

.calculator__keys > *:active::before,
.calculator__keys > .is-depressed::before {
  background-color: rgba(0, 0, 0, 0.2);
  bottom: 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5) inset;
  content: "";
  left: 0;
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.key--operator {
  background-color: #eee;
}

.key--equal {
  background-image: linear-gradient(to bottom, #fe886a, #ff7033);
  grid-column: -2;
  grid-row: 2 / span 4;
}
```

JavaScript:
```js
// NOTE: 
// This is the final source code file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-2

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }

  return result
}

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    if (!action) {
      if (
        displayedNum === '0' ||
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
      calculator.dataset.previousKeyType = 'number'
    }

    if (action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.'
      } else if (
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        display.textContent = '0.'
      }

      calculator.dataset.previousKeyType = 'decimal'
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      if (
        firstValue &&
        operator &&
        previousKeyType !== 'operator' &&
        previousKeyType !== 'calculate'
      ) {
        const calcValue = calculate(firstValue, operator, secondValue)
        display.textContent = calcValue
        calculator.dataset.firstValue = calcValue
      } else {
        calculator.dataset.firstValue = displayedNum
      }

      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.operator = action
    }

    if (action === 'clear') {
      if (key.textContent === 'AC') {
        calculator.dataset.firstValue = ''
        calculator.dataset.modValue = ''
        calculator.dataset.operator = ''
        calculator.dataset.previousKeyType = ''
      } else {
        key.textContent = 'AC'
      }

      display.textContent = 0
      calculator.dataset.previousKeyType = 'clear'
    }

    if (action !== 'clear') {
      const clearButton = calculator.querySelector('[data-action=clear]')
      clearButton.textContent = 'CE'
    }

    if (action === 'calculate') {
      let firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      let secondValue = displayedNum

      if (firstValue) {
        if (previousKeyType === 'calculate') {
          firstValue = displayedNum
          secondValue = calculator.dataset.modValue
        }

        display.textContent = calculate(firstValue, operator, secondValue)
      }

      calculator.dataset.modValue = secondValue
      calculator.dataset.previousKeyType = 'calculate'
    }
  }
})
```