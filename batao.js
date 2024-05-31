const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = 'gemini-1.5-flash';

async function interactWithGemini(inputFile, outputFile, temperature=0.7) {
    try {
        // Read input prompt from file
        const prompt = fs.readFileSync(inputFile, 'utf8');

        // Create GoogleGenerativeAI instance
        const googleAI = new GoogleGenerativeAI(API_KEY);

        // Configure Gemini model with temperature
        const geminiConfig = { temperature };

        // Get the generative model
        const geminiModel = googleAI.getGenerativeModel({ model: MODEL_NAME, geminiConfig });

        // Generate text response
        // geminiModel.generationConfig.responseMimeType = "application/json"
        const result = await geminiModel.generateContent(prompt)
        const response = await result.response;
        const text = response.text();
    

        // Write response to output file
        fs.writeFileSync(outputFile, text, 'utf8');

        console.log('Interaction successful! Response written to:', outputFile);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Check if required number of arguments are provided
if (process.argv.length < 3) {
    console.error('Error: Please provide input file, output file, and temperature as arguments.');
    console.log('Usage: node gemini-interact.js <input_file> <output_file> <temperature>');
    process.exit(1);
}

// Extract input and output file paths and temperature from arguments
const inputFile = process.argv[2];
const outputFile = process.argv[3];
// const temperature = parseFloat(process.argv[4]); // Convert temperature to a number

// interactWithGemini(inputFile, outputFile, temperature);
interactWithGemini(inputFile, outputFile);