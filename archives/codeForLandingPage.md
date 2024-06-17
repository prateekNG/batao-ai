```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Master While Loops with PartyRock!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="content">
            <h1>Level Up Your JavaScript with PartyRock!</h1>
            <p>Learn and master while loops in JavaScript through fun and interactive exercises, including:</p>
            <ul>
                <li>🧠 Thought-provoking coding challenges</li>
                <li>❓ Engaging MCQs to test your knowledge</li>
                <li>😂 Hilarious jokes to keep you entertained</li>
                <li>💡 Real-life examples for practical understanding</li>
            </ul>
            <a href="https://partyrock.aws/u/prateekNG/MIHiJYeuC/JavaScript-Playground%3A-Module-3-Fundamentals" target="_blank" class="button">Start Partying with While Loops!</a>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f2f7e0; /* Softer background */
    overflow: hidden;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
}

.content {
    background-color: #fff; 
    border-radius: 15px;
    padding: 3rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 800px;
    animation: slideUp 1s ease forwards;
}

h1 {
    color: #aed960; /* Darker shade of green */
    margin-bottom: 1.5rem;
}

p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 2rem;
}

ul {
    text-align: left;
    margin-bottom: 2rem;
    padding: 0;
}

li {
    list-style-type: disc;
    margin-left: 2rem;
    color: #555;
    line-height: 1.8;
}

.button {
    display: inline-block;
    padding: 1rem 2rem;
    text-decoration: none;
    background-color: #c3e570; /* Slightly darker button */
    color: white;
    border-radius: 30px;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    background-color: #aed960; /* Darker on hover */
}

@keyframes slideUp {
    0% {
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Background Animation - Optional, replace with your image */
body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(211, 255, 92, 0.2), transparent), 
                url('path/to/your/image.jpg'); 
    background-size: cover;
    background-position: center;
    z-index: -1;
    animation: backgroundAnimation 10s linear infinite;
}

@keyframes backgroundAnimation {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 5% 5%;
    }
    100% {
        background-position: 0% 0%;
    }
}
```

```javascript
// Redirect the button to your PartyRock app URL
document.querySelector('.button').addEventListener('click', function() {
    window.location.href = "https://your-partyrock-app-url.com"; 
});
```

**Here's a breakdown of the changes and why they are easier on the eyes:**

*   **Softer Background:** The background color is changed to a lighter, less saturated shade of green (`#f2f7e0`). This creates a more neutral backdrop and reduces overall visual strain.
*   **Darker Text and Elements:**  The heading (`h1`) and the button use darker shades of green (`#aed960` and `#c3e570`) to provide more contrast against the lighter background. This makes them easier to read and distinguish.
*   **White Content Area:**  The `.content` area keeps a clean white background to further separate the content from the background and ensure text readability.
*   **Consistent Color Palette:**  The color palette now uses different shades of the same green hue, creating visual harmony and a more cohesive look.

**Remember:**

*   You can further customize the colors to your preference.
*   If you are using a background image, make sure it complements the color scheme and doesn't make the text hard to read.
*   Test your design in different browsers and devices to ensure it looks good everywhere. 
