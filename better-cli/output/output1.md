```
├── batao.js
└── lib
    ├── cli.js
    ├── config.js
    └── ai_models
        └── gemini.js
```

```javascript
// lib/cli.js
const { program } = require('commander');
const { interactWithAI } = require('./ai_models/gemini'); // Assuming Gemini is the default
const { getConfigFilepath, loadConfig } = require('./config');

program
    .name('batao')
    .description('A CLI for interacting with AI models.')
    .version('1.0.0');

// Basic prompt command
program.command('ask')
    .description('Ask the AI a question.')
    .argument('<prompt>', 'The prompt to send to the AI.')
    .option('-o, --output <file>', 'Save the response to a file.')
    .option('-m, --model <model>', 'Specify the AI model to use.')
    .option('-t, --temperature <number>', 'Set the temperature (creativity) of the AI.', parseFloat, 0.4)
    .action(async (prompt, options) => {
        try {
            // Load config and potentially override with command line options
            const config = loadConfig();
            const model = options.model || config.defaultModel;
            const outputFile = options.output; 
            const temperature = options.temperature || config.defaultTemperature;

            const response = await interactWithAI(prompt, { model, temperature });

            if (outputFile) {
                // ... (save to file logic)
            } else {
                console.log(response);
            }

        } catch (error) {
            console.error('Error:', error);
        }
    });

// Config command (for setting defaults)
program.command('config')
    .description('Configure default settings for batao.')
    .option('-m, --model <model>', 'Set the default AI model.')
    .option('-t, --temperature <number>', 'Set the default temperature.', parseFloat)
    // ... more config options
    .action((options) => {
        const configFile = getConfigFilepath(); 
        // ... (logic to update config file with new options)
    });

program.parse();
```

```javascript
// lib/ai_models/gemini.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

const API_KEY = process.env.GEMINI_API_KEY; // Consider loading from config file

async function interactWithAI(prompt, options = {}) {
    const { model = 'gemini-1.5-pro', temperature = 0.4 } = options;

    try {
        const googleAI = new GoogleGenerativeAI(API_KEY);
        const geminiConfig = { temperature };
        const geminiModel = googleAI.getGenerativeModel({ model, geminiConfig });

        const result = await geminiModel.generateContent(prompt);
        const response = await result.response;
        return response.text(); 

    } catch (error) {
        // Handle errors gracefully (logging, custom messages)
        throw new Error(`Error interacting with Gemini: ${error.message}`);
    }
}

module.exports = { interactWithAI };
```

```javascript
// lib/config.js
const os = require('os');
const fs = require('fs');
const path = require('path');

const CONFIG_DIR = path.join(os.homedir(), '.batao');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

function getConfigFilepath() {
    return CONFIG_FILE;
}

function loadConfig() {
    try {
        const configData = fs.readFileSync(CONFIG_FILE, 'utf8');
        return JSON.parse(configData);
    } catch (error) {
        // If config doesn't exist or is invalid, return defaults
        return {
            defaultModel: 'gemini-1.5-pro',
            defaultTemperature: 0.4
            // ... other default settings
        };
    }
}

// ... (Add functions to update and save the config file)

module.exports = { getConfigFilepath, loadConfig }; 
```