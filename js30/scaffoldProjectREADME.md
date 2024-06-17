# React Project Idea Generator and Scaffolder

This project leverages the power of Google's Gemini Pro model to generate React project ideas and create detailed scaffolded project guides for students learning React.js. 

## Features

- **Generate Unique Project Ideas:** Automatically generates a list of unique React project ideas, complete with short descriptions, detailed explanations, estimated complexity, and relevant React concepts.
- **Detailed Scaffolded Project Guides:** Creates comprehensive project guides for each idea. These guides break down the project into manageable phases and steps, offering clear instructions, hints, code snippets, and essential learning resources, without hand-holding or spoon-feeding.
- **Review and Enhance Guides:**  The system automatically reviews the generated project guides and makes improvements to ensure clarity, completeness, and an effective learning experience for students.

## Project Structure

```
├── reviewAndModifyProjectGuide.js
├── generateIdeas.js
├── main.js
├── generateProject.js
└── helper-scripts
    └── projectContentMD.sh

```

### Components

- `main.js`: The main script that orchestrates the entire process. It interacts with the Google Generative AI API, generates project ideas, and initiates the creation of scaffolded project guides.
- `generateIdeas.js`: This script is responsible for generating new and unique project ideas based on a set of seed ideas and previous responses. It ensures diversity and avoids repetition in the generated ideas.
- `generateProject.js`: This component takes a project idea as input and generates a detailed scaffolded project guide. It analyzes existing project structures and playlists to create a guide tailored for beginner programmers.
- `reviewAndModifyProjectGuide.js`:  This script reviews and improves the initially generated project guides. It identifies gaps, enhances clarity, and optimizes the learning path for students.
- `helper-scripts/projectContentMD.sh`:  A bash script to process the content of the project and create a markdown file with the content of all the files and folders in the project, with syntax highlighting.
- `seed-ideas/`: This folder contains seed data in JSON format for detailed project ideas and a text file for storing previous responses to avoid repetition.
- `seed-projects/`: Contains example projects used as references for scaffolding new project guides. 
- `projects/`: This folder stores the generated scaffolded project guides in separate markdown files.
- `helper-scripts/keyPrinciplesForScaffoldingProjects.md`: A markdown file containing the key principles to be used for scaffolding the projects.


## Getting Started

### Prerequisites

- **Node.js and npm:** Ensure you have Node.js and npm installed on your system.
- **API Key:**  Generate an API key for your Google Cloud project.

### Installation

1. **Clone the repository:** 

   ```bash
   git clone https://github.com/your-username/react-project-generator.git
   cd react-project-generator
   ```

2. **Install Google Generative AI Manually:**

   ```bash
   npm install @google/generative-ai
   ```

3. **Set up API Key:**
   - Create a `.env` file in the root directory of your project.
   - Add your Google Cloud API key to the `.env` file:

     ```
     GEMINI_API_KEY=YOUR_API_KEY_HERE
     ```

## Usage

1. **Run the Main Script:** Execute the following command to start the project generation process:

   ```bash
   node main.js 
   ```

   - This will generate projects based on either detailed project ideas (from `seed-ideas/detailedIdeas.json`) or randomly generated ideas.

2. **Customize Output:** Modify the `main.js` file to:

   - Adjust the number of project ideas to generate using the `numIdeas` parameter.
   - Specify a different output directory for the generated projects.

## Customization

### Modifying Seed Data

- **Add Detailed Project Ideas:**  
  - Edit `seed-ideas/detailedIdeas.json`. 
  - Include new project ideas with their descriptions, categories, complexity, and relevant React concepts.
- **Update Seed Ideas:**  
  - Modify `seed-ideas/seedIdeas.json` to provide different seed ideas for the random project idea generator.

### Adjusting Scaffolding

- **Customize Scaffolding Steps:**
  - Edit `helper-scripts/keyPrinciplesForScaffoldingProjects.md` 
  - Modify the steps or add your own guidelines for structuring the scaffolded project guides.

### Advanced Configuration

- Explore the code within `generateProject.js` and `reviewAndModifyProjectGuide.js` to fine-tune the scaffolding process, adjust the prompts used with the Gemini Pro model, or integrate additional logic based on your specific requirements.
