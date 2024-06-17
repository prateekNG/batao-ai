```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DJ Soundboard</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="https://fav.farm/🔥" />
</head>
<body>
  <div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">hihat</span>
    </div>
    <div data-key="68" class="key">
      <kbd>D</kbd>
      <span class="sound">kick</span>
    </div>
    <div data-key="70" class="key">
      <kbd>F</kbd>
      <span class="sound">snare</span>
    </div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="72" class="key">
      <kbd>H</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="74" class="key">
      <kbd>J</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="75" class="key">
      <kbd>K</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">tom</span>
    </div>
  </div>

  <audio data-key="65" src="sounds/clap.wav"></audio>
  <audio data-key="83" src="sounds/hihat.wav"></audio>
  <audio data-key="68" src="sounds/kick.wav"></audio>
  <audio data-key="70" src="sounds/snare.wav"></audio>
  <audio data-key="71" src="sounds/tom-1.wav"></audio>
  <audio data-key="72" src="sounds/tom-2.wav"></audio>
  <audio data-key="74" src="sounds/tom-3.wav"></audio>
  <audio data-key="75" src="sounds/tom-4.wav"></audio>
  <audio data-key="76" src="sounds/tom-5.wav"></audio>

  <script>
    function removeTransition(e) {
      if (e.propertyName !== 'transform') return; // Skip it if it's not a transform
      this.classList.remove('playing');
    }

    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      if (!audio) return; // Stop the function if the audio element doesn't exist
      audio.currentTime = 0; // Rewind to the start
      audio.play();
      e.target.classList.add('playing');
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => {
      key.addEventListener('transitionend', removeTransition);
      key.addEventListener('click', playSound);
    });
  </script>
</body>
</html>
```