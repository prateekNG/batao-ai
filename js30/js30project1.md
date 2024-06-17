## 30 Days of JavaScript: Day 1 - Building a Drum Kit

Welcome to the first day of your 30 Days of JavaScript challenge! We'll be building a simple yet fun drum kit that responds to keyboard presses and visually indicates which sound is being played. 

**Let's get started!**

### Step 1: Setting up the HTML

Open the `index-START.html` file and examine the existing code. 

- You'll find a container (`<div class="keys">`) with multiple divs representing the drum keys. Each key has:
    - A `data-key` attribute storing the keyboard key code.
    - A `kbd` element displaying the key's label.
    - A `span` with the class `sound` showing the name of the sound.
- You'll also see nine `audio` elements, each linked to a sound file using the `src` attribute and the same `data-key` attribute as the corresponding key div.

**Your task:**

- Open the `index-START.html` file in a browser. You should see a grid of buttons representing the drum keys.
- Right now, clicking on the keys doesn't do anything. We'll fix that in the next step.

### Step 2: Adding JavaScript for Keyboard Interaction

Now, let's add some JavaScript magic to make the drum kit come alive!

- Open the `<script>` tag in the `index-START.html` file. 
- Start by defining a function called `playSound` that will be triggered when a key is pressed. This function will:
    - Use `e.keyCode` to get the key code of the pressed key.
    - Find the corresponding audio element using `querySelector`.
    - Find the corresponding key div using `querySelector`.
    - Play the audio using the `audio.play()` method.
- Inside the `playSound` function, add a `classList.add('playing')` to the key div to visually highlight the pressed key.

**Here's a starting point:**

```javascript
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  // ... play the audio and add the 'playing' class
}

window.addEventListener('keydown', playSound);
```

**Hint:** 

- The `e.keyCode` property of the event object passed to the `playSound` function contains the key code of the pressed key.
- You can use backticks (``) for template literals to embed variables inside strings.

**Test it out:** 

- Save the file and refresh the browser. 
- Now, when you press the keys A, S, D, F, G, H, J, K, and L, you should hear the corresponding sounds!

### Step 3: Adding Visual Feedback

Currently, the key only stays highlighted until the next key is pressed. Let's make the highlighting last for a short period.

- Inside the `playSound` function, add `audio.currentTime = 0` before `audio.play()` to reset the audio playback to the beginning.
- Define a new function `removeTransition` that will remove the `playing` class from the key div after the transition ends.

**Here's an example:**

```javascript
function removeTransition(e) {
  // Remove the 'playing' class if the transition property is 'transform'
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

// ... rest of the code
```

**Hint:**

- Use `addEventListener` with `transitionend` to trigger the `removeTransition` function when the transition ends.

**Test it out:**

- Save the file and refresh the browser.
- The keys should now visually pulsate for a brief moment when pressed.

### Step 4: Styling the Drum Kit (Optional)

Finally, let's add some style to our drum kit!

- Open the `style.css` file and add some CSS rules to style the `.key`, `.kbd`, `.sound`, and `.playing` classes.
- Feel free to get creative and experiment with colors, fonts, shadows, and animations to customize the look of your drum kit!

**Example styles:**

```css
/* ... existing styles */

.key {
  /* Add your custom styles here */
}

kbd {
  /* Add your custom styles here */
}

.sound {
  /* Add your custom styles here */
}

.playing {
  /* Add your custom styles here */
}
```

**Hint:**

- You can use CSS properties like `background-color`, `color`, `font-size`, `border-radius`, `box-shadow`, and `transform` to create different effects.

**Congratulations!**

You've successfully built a basic drum kit using JavaScript! You can now use your keyboard to play various sounds and enjoy the visual feedback.

**Bonus Challenges:**

- Add more keys and sounds to your drum kit.
- Implement click events on the keys so they can also be triggered with mouse clicks.
- Use CSS animations to create more engaging visual effects.
- Explore different sound libraries and experiment with different sound effects.

Happy coding! 🎉
