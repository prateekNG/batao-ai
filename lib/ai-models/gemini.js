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