#!/usr/bin/env node
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { program } = require('commander');
const prompt = require('prompt-sync')({ sigint: true }); // For secure input

// Load configuration from user's home directory
const homeDir = os.homedir();
const configDir = path.join(homeDir, '.batao');
const configPath = path.join(configDir, 'config.json');

// Ensure config directory exists
if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir);
}

// Load or initialize configuration
let config = {
    apiKey: null,
    defaultModel: "gemini-1.5-flash",
    defaultTemperature: 0.4
};

if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
} else {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

// Function to set the API key
function setApiKey() {
    console.log("API key not found. Please enter a Google Generative AI API key. Get one here: https://makersuite.google.com/app/apikey");
    const apiKey = prompt("API Key: ");

    if (!apiKey) {
        console.error("Error: API key cannot be empty.");
        process.exit(1);
    }

    // Update config.json
    config.apiKey = apiKey;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), { mode: 0o600 }); // Ensure only the user can read/write
    console.log("API key saved successfully!");
}

// Check for API key and prompt if necessary
if (!config.apiKey) {
    setApiKey();
}

// Initialize Google Generative AI (after potentially setting the API key)
const googleAI = new GoogleGenerativeAI(config.apiKey);

// Model name mapping for easier user input
const modelMapping = {
    'flash': 'gemini-1.5-flash',
    'pro': 'gemini-1.5-pro'
};

// Function to interact with an AI model
async function generateText(model, prompt, temperature) {
    try {
        // Configure Gemini model with temperature
        const geminiConfig = { temperature };

        // Get the generative model
        const geminiModel = googleAI.getGenerativeModel({ model, geminiConfig });

        // Generate text response
        // geminiModel.generationConfig.responseMimeType = "application/json"
        const result = await geminiModel.generateContent(prompt);
        const response = await result.response;

        return response.text(); // Return the generated text

    } catch (error) {
        console.error('Error generating text:', error);
        // Handle the error appropriately (e.g., throw for program to exit)
        throw error;
    }
}

// Define CLI commands using Commander.js (Modern Syntax)
program
    .description('Interact with AI models from your terminal.')
    .option('-m, --model <model>', `The AI model to use. You can use shortcuts: ${Object.keys(modelMapping).join(', ')}`, config.defaultModel)
    .option('-t, --temperature <temperature>', 'The temperature for text generation.', parseFloat, config.defaultTemperature)
    .option('-i, --input <file>', 'Read the prompt from a file.')
    .option('-o, --output <file>', 'Save the output to a file.')
    .option('-r, --review <files...>', 'Review the code files provided (space-separated list)')
    .action(async (options) => {
        try {
            let prompt = '';
            
            if (options.review) {
                // Get the list of file paths
                const reviewFilePaths = options.review;

                for (const reviewFilePath of reviewFilePaths) {
                    if (fs.existsSync(reviewFilePath)) {
                        const fileContent = fs.readFileSync(reviewFilePath, 'utf-8');
                        const fileExtension = reviewFilePath.split('.').pop();
                        prompt += `Filename: ${reviewFilePath}\n\n\`\`\`${fileExtension}\n${fileContent}\n\`\`\`\n\n`;
                    } else {
                        console.error(`The specified file does not exist: ${reviewFilePath}`);
                        process.exit(1);
                    }
                }
                // file or files depending on the number of files

                prompt = `Please review the following code ${reviewFilePaths.length > 1 ? 'files' : 'file'} for logical issues, typos, and provide suggestions to improve them or make them more efficient:\n\n${prompt}`;
            } else if (options.input) {
                // Read prompt from input file
                prompt = fs.readFileSync(options.input, 'utf-8');
            } else {
                // No input file, prompt should be provided as remaining arguments
                prompt = program.args.join(' ');
                if (!prompt) {
                    console.error('Error: Please provide a prompt or use the -i option to specify an input file.');
                    process.exit(1);
                }
            }

            // Map model shortcut to full name
            const model = modelMapping[options.model] || options.model;
            
            // Generate response from the selected model
            const response = await generateText(model, prompt, options.temperature);

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