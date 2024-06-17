```javascript
#!/usr/bin/env node

const fs = require('fs');
const { program } = require('commander');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load API key from environment variable
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY environment variable not set.");
  process.exit(1);
}

// Default configuration
const defaultConfig = {
  model: 'gemini-1.5-pro',
  temperature: 0.4,
};

// Function to interact with Gemini AI
async function interactWithGemini(prompt, config) {
  try {
    const googleAI = new GoogleGenerativeAI(API_KEY);
    const geminiConfig = { temperature: config.temperature };
    const geminiModel = googleAI.getGenerativeModel({ model: config.model, geminiConfig });

    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
}

// Define CLI commands using Commander.js
program
  .name('batao')
  .description('A CLI for interacting with Gemini AI')
  .version('1.0.0');

program
  .command('ask <prompt>')
  .description('Ask Gemini AI a question directly from the command line')
  .option('-o, --output <file>', 'Save the response to a file')
  .option('-m, --model <model>', 'Specify the Gemini model name/code', defaultConfig.model)
  .option('-t, --temperature <temperature>', 'Set the temperature for the response', parseFloat, defaultConfig.temperature)
  .action(async (prompt, options) => {
    try {
      const response = await interactWithGemini(prompt, {
        model: options.model,
        temperature: options.temperature,
      });

      if (options.output) {
        fs.writeFileSync(options.output, response, 'utf8');
        console.log(`Response saved to ${options.output}`);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error during interaction:', error); 
    }
  });

program
  .command('config')
  .description('Configure default settings')
  .action(() => {
    console.log('Not implemented yet.'); 
    // Implement logic to configure and save default settings (e.g., to a config file)
  });

program.parse(process.argv);
```

**Instructions:**

1.  **Save the code:** Save the above code as `batao.js`.
2.  **Make it executable:** Use `chmod +x batao.js` to make the script executable.
3.  **Set API Key:**
    *   **Option 1: Environment Variable:** Set the environment variable `GEMINI_API_KEY` to your actual Google Gemini API key.
    *   **Option 2: Hardcode (Not Recommended):** Replace `process.env.GEMINI_API_KEY` in the code with your API key. **Warning:** This is not secure for version control.

**How to Use:**

1.  **Ask a question:**
    ```bash
    ./batao.js ask "What is the meaning of life?"
    ```
2.  **Save the response to a file:**
    ```bash
    ./batao.js ask "What is the capital of France?" -o answer.txt
    ```
3.  **Use a different model:**
    ```bash
    ./batao.js ask "Translate 'Hello world' to Spanish" -m gemini-1.5-turbo 
    ```
4.  **Change the temperature:**
    ```bash
    ./batao.js ask "Tell me a joke" -t 0.8
    ```

**Future Improvements:**

*   **Configuration File:** Implement the `config` command to allow users to set default model, temperature, and potentially other settings in a configuration file.
*   **Support for Other Models/APIs:** Create a modular structure to easily integrate APIs from other AI providers. This might involve abstracting the AI interaction logic into separate modules.
*   **Input from File:** Add an option to read the prompt from a file instead of directly from the command line argument.

This enhanced CLI provides a more user-friendly and feature-rich way to interact with Gemini AI and sets the stage for future extensibility.
