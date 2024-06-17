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