#!/usr/bin/env node
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');
const { program } = require('commander'); // Import program directly

// Load configuration 
const config = require(path.join(__dirname, 'config.json'));

// Initialize Google Generative AI
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
        const result = await geminiModel.generateContent(prompt)
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
    .action(async (options) => {
        try {
            let prompt = ''; 

            if (options.input) {
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