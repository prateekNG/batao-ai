## snake.html

```html
<!DOCTYPE html>
<html>
<head>
  <title>Snake Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <canvas id="gameCanvas" width="400" height="400"></canvas>
  <script src="script.js"></script>
</body>
</html>
```

## style.css

```css
body {
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

canvas {
  background-color: #000;
  border: 2px solid #fff;
}
```

## script.js

```javascript
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = {};
let direction = 'right';
let score = 0;
let gameOver = false;

function generateFood() {
  food = {
    x: Math.floor(Math.random() * (canvas.width / gridSize)),
    y: Math.floor(Math.random() * (canvas.height / gridSize))
  };
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? 'green' : 'lime';
    ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize, gridSize);
  }

  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function update() {
  if (gameOver) return;

  const head = { x: snake[0].x, y: snake[0].y };

  switch (direction) {
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
    case 'right':
      head.x++;
      break;
  }

  if (head.x < 0 || head.x >= canvas.width / gridSize || head.y < 0 || head.y >= canvas.height / gridSize || checkCollision(head)) {
    gameOver = true;
    alert('Game Over! Your score: ' + score);
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    generateFood();
  } else {
    snake.pop();
  }

  draw();
}

function checkCollision(head) {
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function changeDirection(e) {
  const keyPressed = e.key;

  const directions = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right'
  };

  const newDirection = directions[keyPressed];

  if (newDirection && (direction === 'up' && newDirection !== 'down' || direction === 'down' && newDirection !== 'up' || direction === 'left' && newDirection !== 'right' || direction === 'right' && newDirection !== 'left')) {
    direction = newDirection;
  }
}

generateFood();

setInterval(update, 100);
document.addEventListener('keydown', changeDirection);
```

**Instructions:**

1. **Create files:** Create three files named `snake.html`, `style.css`, and `script.js`.
2. **Copy code:** Paste the corresponding code from above into each file.
3. **Open in browser:** Open `snake.html` in your web browser.
4. **Play:** Use the arrow keys to control the snake.

**Gameplay:**

- The snake starts at the top left corner of the canvas.
- Use the arrow keys to move the snake up, down, left, and right.
- The snake eats the red food.
- Each time the snake eats food, it grows longer, and your score increases.
- The game ends if the snake hits itself or the edge of the canvas.