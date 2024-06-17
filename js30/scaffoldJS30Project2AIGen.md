```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Live Cricket Scoreboard</title>
  <link rel="icon" href="https://fav.farm/🔥" />
  <style>
    html {
      background-color: #4CAF50; /* Green like the cricket field! */
      font-family: 'Arial', sans-serif;
      color: white;
      text-align: center;
    }

    body {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }

    .scoreboard {
      background-color: #333;
      padding: 30px;
      border-radius: 10px;
      display: flex;
    }

    .team {
      margin: 0 30px;
      text-align: center;
    }

    .team-name {
      font-size: 2em;
      margin-bottom: 10px;
    }

    .score, .wickets {
      font-size: 3em;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="scoreboard">
    <div class="team">
      <h2 class="team-name">Team A</h2>
      <span class="score">0</span>
      <span class="wickets">- 0</span>
    </div>
    <div class="team">
      <h2 class="team-name">Team B</h2>
      <span class="score">0</span>
      <span class="wickets">- 0</span>
    </div>
  </div>

  <script>
    const teamAScoreElement = document.querySelector('.team:nth-child(1) .score');
    const teamAWicketsElement = document.querySelector('.team:nth-child(1) .wickets');
    const teamBScoreElement = document.querySelector('.team:nth-child(2) .score');
    const teamBWicketsElement = document.querySelector('.team:nth-child(2) .wickets');

    function updateScore(team, runs, wickets) {
      if (team === 1) {
        teamAScoreElement.textContent = runs;
        teamAWicketsElement.textContent = `- ${wickets}`;
      } else if (team === 2) {
        teamBScoreElement.textContent = runs;
        teamBWicketsElement.textContent = `- ${wickets}`;
      }
    }

    let teamAScore = 0;
    let teamAWickets = 0;
    let teamBScore = 0;
    let teamBWickets = 0;

    setInterval(() => {
      const randomRuns = Math.floor(Math.random() * 7); 

      // For now, let's just keep adding to Team A's score
      teamAScore += randomRuns; 
      updateScore(1, teamAScore, teamAWickets); 
    }, 2000); 
  </script>

</body>
</html>
```