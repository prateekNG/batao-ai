#!/usr/bin/env node
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');
const { program } = require('commander'); // Import program directly

// Load configuration 
const config = require(path.join(__dirname, 'config.json'));

// Initialize Google Generative AI
const googleAI = new GoogleGenerativeAI(config.apiKey);

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
    .argument('<prompt>', 'The prompt for the AI model.') // Note: argument is required now
    .option('-m, --model <model>', 'The AI model to use.', config.defaultModel)
    .option('-t, --temperature <temperature>', 'The temperature for text generation.', parseFloat, config.defaultTemperature)
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