## Let's Build a Cool Photo Editor with JavaScript! 🎨

In this project, you'll create a fun photo editor where you can change the spacing, blur, and background color of an image using **CSS variables** and **JavaScript**. Imagine being able to customize your pictures for social media or your personal blog! 📸

**What you will learn:**

- How to use CSS variables to style your web page.
- How to select HTML elements using JavaScript.
- How to listen for events (like someone moving a slider) and make things happen on your webpage!
- How to update CSS variables using JavaScript, making your webpage interactive.

### Phase 1: Setting Up the Scene (HTML) 🎬

**index.html:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Photo Editor Fun!</title>
  <link rel="icon" href="https://fav.farm/🔥" />
</head>
<body>
  <h2>Make Your Photo Pop!</h2>

  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

    <label for="blur">Blur:</label>
    <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

    <label for="base">Base Color:</label>
    <input id="base" type="color" name="base" value="#ffc600">
  </div>

  <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" alt="A beautiful scene">

  <style>

    /*
      We'll add our CSS styles here later!
    */

  </style>

  <script>
    // We'll add our JavaScript code here later!
  </script>

</body>
</html>

```

**Explanation:**

-   We have three input controls:
    -   **Spacing:** A slider (`<input type="range">`) to control the spacing around the image.
    -   **Blur:** Another slider to control how blurry the image looks.
    -   **Base Color:** A color picker (`<input type="color">`) to change the background color.

### Phase 2: Adding Style to the Page (CSS) 💅

Now let's add some CSS to make our photo editor look nice and interesting!

```css
/* index.html - inside the <style> tag */
body {
  text-align: center;
  background: #193549;
  color: white;
  font-family: 'Arial', sans-serif; /* Choose a simple font */
  font-weight: 100;
  font-size: 20px; /* Adjust font size for better readability */
}

h2 {
  margin-bottom: 20px; /* Add some space below the heading */
}

.controls {
  margin-bottom: 30px; /* Add space below the controls */
  display: flex;      /* Arrange controls in a row */
  justify-content: center; /* Center the controls horizontally */
  align-items: center;    /* Center the controls vertically */
  gap: 20px;        /* Add space between the controls */
}

input {
  width: 80px;  /* Adjust width for better slider control */
}

img {
  max-width: 80%;  /* Make sure the image fits the screen */
  height: auto;    /* Maintain aspect ratio */
  display: block;   /* Prevents image from overflowing its container */
  margin: 0 auto;  /* Center the image horizontally */
}
```

**Explanation:**

-   We've centered the text, added a dark background, and chose a clean font.
-   The controls are neatly organized in a row with spacing between them.
-   The image is set to fit the screen width while maintaining its original aspect ratio.

### Phase 3: Bringing it to Life with JavaScript ✨

This is where the magic happens!  We'll use JavaScript to:

1.  **Select** the input elements in our HTML.
2.  **Listen** for changes on these input elements (when someone uses the sliders or color picker).
3.  **Update** the CSS variables based on the input values.

```javascript
// index.html - inside the <script> tag

// 1. Select the input elements
const spacingControl = document.getElementById('spacing'); 
const blurControl = document.getElementById('blur');
const baseColorControl = document.getElementById('base');

// 2. Add event listeners to each input
spacingControl.addEventListener('input', updateImage);
blurControl.addEventListener('input', updateImage);
baseColorControl.addEventListener('input', updateImage);

// 3. Create a function to update the image style
function updateImage() {
    // Get the current values from the input controls
    const spacingValue = spacingControl.value + 'px';
    const blurValue = blurControl.value + 'px';
    const baseColorValue = baseColorControl.value;
    
    // Select the image element
    const image = document.querySelector('img');

    // Update the image style using the input values
    // Hint: Remember 'style.setProperty()'? 
    // You'll need to use CSS custom properties (variables) 
    // to dynamically change the image's padding, filter and background. 
    
}
```

**Explanation:**

- **Selecting elements:** We use `document.getElementById()` to grab our input elements based on their unique IDs.
- **Event Listeners:** We use `addEventListener('input', ...)` to listen for any changes on the input elements. This means whenever the slider is moved or the color picker is changed, something will happen!
- **The `updateImage` function:** This function will hold the logic to update our CSS variables.  We'll get the current values from the input elements and use them to update the image style.

### Phase 4: Completing the `updateImage` function 🧩

Let's fill in the missing pieces of our `updateImage` function!

```javascript
// ... (previous code)

function updateImage() {
  // ... (Get values from input controls - same as before) 

  // Select the image element
  const image = document.querySelector('img');

  // Update the image style
  image.style.padding = spacingValue;  // Update padding
  image.style.filter = `blur(${blurValue})`; // Update blur 
  image.style.backgroundColor = baseColorValue; // Update background color
}
```

**Explanation:**

- We're using `image.style.setProperty()` to directly modify the CSS properties of our image.
- We dynamically construct the `blur` filter value using a template literal.
- **Try it out!**  Refresh your `index.html` file in the browser, and you should have a working photo editor! 🎉


### Challenge! 🚀

Can you add more controls to the photo editor?  Maybe a slider to adjust the image's brightness or contrast? Or even a control to rotate the image? Get creative and see what cool effects you can create!  

Happy coding! 😉
