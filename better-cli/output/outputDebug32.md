The error "TypeError: program.command is not a function" usually means you're using an older version of `commander.js` that doesn't support the `.command` method directly on the `program` object.

Here's how to fix it and improve your CLI structure:

```javascript
#!/usr/bin/env node
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');
const { program } = require('commander'); // Import program directly

// ... rest of your code (config, googleAI, generateText) ...

// Define CLI commands using Commander.js (updated)
program
  .name('batao')
  .description('Interact with AI models from your terminal.')
  .command('generate <prompt>') // Define a subcommand "generate"
  .description('Generate text using the specified AI model.')
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

**Explanation of Changes:**

1.  **Direct `program` Import:** Import `program` directly from `commander` using `{ program }`.
2.  **Subcommand Structure:** Use `program.command('generate <prompt>')` to define a "generate" subcommand, which improves the CLI's organization, especially if you plan to add more commands later.
3.  **Action Handling:**  The action handler is now associated with the `generate` subcommand.

**How to Use (After Making Changes):**

1.  **Save:** Save the modified `index.js`.
2.  **Run:** Now, you'll need to use the `generate` subcommand:

    ```bash
    batao generate "Write a short story about a cat who goes on an adventure."
    batao generate "Translate this to Spanish: 'Hello, how are you?'" -m "gemini-1.5-pro" -t 0.5 -o output.txt 
    ```

This revised structure is more in line with how `commander.js` is intended to be used for building CLIs, especially as you add more features and commands to your "batao" tool.
