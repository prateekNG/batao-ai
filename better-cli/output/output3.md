## batao CLI

This CLI tool, named "batao" (meaning "tell me" in Hindi), provides a convenient interface for interacting with Google Gemini AI and potentially other AI models in the future. 

### Features

*   **Prompt Input:** Takes your prompt directly from the command line or from an input file.
*   **Model Selection:** Allows you to specify different Gemini models or potentially other AI providers.
*   **Temperature Control:** Adjust the creativity and randomness of the generated text using the temperature parameter.
*   **Output Options:** Save the AI-generated response to a file or print it directly to the console.
*   **Configuration:** Set default values for common options like model and temperature.

### Source Code

**index.js**

```javascript
#!/usr/bin/env node
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');
const program = require('commander');

// Load configuration (defaults, API keys, etc.)
const config = require(path.join(__dirname, 'config.json'));

// Initialize Google Generative AI
const googleAI = new GoogleGenerativeAI(config.apiKey);

// Function to interact with an AI model
async function generateText(model, prompt, temperature) {
  try {
    // Configure Gemini model with temperature (adjust for other models if needed)
    const geminiConfig = { temperature };
    const geminiModel = googleAI.getGenerativeModel({ model, geminiConfig });

    // Generate text response
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error during text generation:', error);
    throw error;
  }
}

// Define CLI commands using Commander.js
program
  .name('batao')
  .description('Interact with AI models from your terminal.')
  .argument('<prompt>', 'The prompt for the AI model.', '')
  .option('-m, --model <model>', 'The AI model to use. (Default: ' + config.defaultModel + ')', config.defaultModel)
  .option('-t, --temperature <temperature>', 'The temperature for text generation. (Default: ' + config.defaultTemperature + ')', parseFloat, config.defaultTemperature)
  .option('-o, --output <file>', 'Save the output to a file.')
  .action(async (prompt, options) => {
    try {
      // Generate response from the selected model
      const response = await generateText(options.model, prompt, options.temperature);

      // Output handling
      if (options.output) {
        fs.writeFileSync(options.output, response, 'utf8');
        console.log('Response saved to:', options.output);
      } else {
        console.log(response);
      }
    } catch (error) {
      process.exit(1);
    }
  });

// Parse arguments and execute commands
program.parse();
```

**config.json**

```json
{
  "apiKey": "YOUR_GEMINI_API_KEY", 
  "defaultModel": "gemini-1.5-pro",
  "defaultTemperature": 0.7
}
```

### Instructions

1.  **Save:** Save the code above as `index.js` and the configuration as `config.json` in a new directory.
2.  **Install Dependencies:** Navigate to the directory in your terminal and run `npm install @google/generative-ai commander`.
3.  **API Key:** Replace `YOUR_GEMINI_API_KEY` in `config.json` with your actual Google Gemini API key.
4.  **Executable:** Make the script executable with `chmod +x index.js`.
5.  **Create Alias (Optional):** Add an alias to your shell's configuration file (e.g., `~/.bashrc` or `~/.zshrc`) to invoke the CLI tool easily:

```bash
alias batao='node /path/to/your/directory/index.js' # Replace with actual path
```

6.  **Run:** Use the CLI tool with various options:

```bash
batao "Write a short story about a cat who goes on an adventure."
batao "Translate this sentence to Spanish: 'Hello, how are you?'" -m "gemini-1.5-pro" -t 0.5 -o output.txt
```

### Future Enhancements

*   **Model Abstraction:** Create a modular structure to easily integrate APIs from other AI providers like OpenAI.
*   **Prompt Engineering Tools:** Add features for advanced prompt formatting and management.
*   **Interactive Mode:** Develop an interactive mode for a more conversational experience with the AI.

This enhanced CLI provides a more structured and feature-rich approach to interacting with Google Gemini and sets the stage for incorporating other AI models in the future. Remember to replace placeholders with your actual API keys and desired configurations.
