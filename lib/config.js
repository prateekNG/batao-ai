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