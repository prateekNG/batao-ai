# Batao: Your AI Assistant on the Command Line

Batao is a command-line interface (CLI) tool that allows you to interact with Google's powerful Gemini generative AI models directly from your terminal.  Write stories, translate languages, generate code, and more!

## Installation

```bash
sudo npm install -g batao
```

> [!IMPORTANT]
>### Handling "fetch is not defined" Error
>
>You might encounter a "fetch is not defined" error if your Node.js version is older than 18. Batao relies on `@google/generative-ai`, which requires Node.js 18 or later. Here's how to resolve this:
>
>#### 1. **Install Node Version Manager (NVM):** 
>   ```bash
>   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
>   ```
>   or
>
>   ```bash
>   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
>   ``` 
>   Or follow the instructions for your operating system at [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
>#### 2. **Reload Your Shell:** 
>    Close and reopen your terminal, or run: 
>    ```bash
>    source ~/.bashrc  
>    ```
>#### 3. **Install Node.js LTS:**
>    ```bash
>    nvm install --lts
>    ``` 
>#### 4. **Verify Node.js Version:**
>   ```bash
>   node -v
>   ```
>   You should see a version number of 18 or higher.

## Configuration

Before using Batao, you need to obtain a Google Generative AI API key. 

1.  **Get your API Key:** Visit the [Google Generative AI Console](https://developers.google.com/generative-ai/docs/api-keys) to get your key.
2.  **First Run:** Run `batao` in your terminal. You will be prompted to enter your API key, which will be saved securely in a configuration file (`config.json`). 

## Usage

```bash
batao [prompt] [options]
```

**Prompt:** 
* Provide your prompt directly as an argument:
    * Example: `batao "Write a short story about a cat who goes on an adventure."` - This will print the generated story to the terminal.
* Read the prompt from a file using `-i` or `--input`. 
    * Example: `batao -i my_prompt.md` - This will take input from `my_prompt.md` file and print the output to the terminal.

**Options:**

* `-m, --model <model>`: Specify the Gemini model to use.
    * `flash`: (Default) Fastest and most lightweight.
    * `pro`:  More powerful, suitable for complex tasks.
    * You can also use the full model names:  `gemini-1.5-flash`, `gemini-1.5-pro`.
* `-t, --temperature <temperature>`: Control the creativity of the output (0.0 - 1.0). Higher values result in more creative (and potentially less predictable) output. Default: 0.4
* `-i, --input <file>`: Read the prompt from the specified file.
* `-o, --output <file>`: Save the generated text to a file.

> [!TIP] 
> ### Using Markdown for Code and Rich Input:
>
>You can significantly enhance your prompts by creating them in Markdown (.md) files. Here's why this is beneficial:
>
>* **Code Embedding:** Use code blocks to clearly present code to Batao for analysis, feedback, or modification. 
>   ````markdown
>   ```python
>   def my_function():
>       print("Hello from Python!")
>   ```
>   ````
>* **Syntax Highlighting:** Markdown supports syntax highlighting, making your code more readable for both you and Batao. This leads to more accurate code analysis and responses.
>* **Structured Prompts:** Create well-organized and detailed prompts using headings, lists, and other Markdown formatting elements. 

## Examples

**1. Generate a creative story with the Pro model and save it to a file:**

```bash
batao "A lonely robot on Mars discovers..." -m pro -t 0.7 -o my_story.txt
```

This command takes a prompt as input and uses the Pro model with a temperature of 0.7 to generate text. The output is then saved to a file named `my_story.txt`.

**2. Translate text to Spanish with a lower temperature for more literal translation and print the output on terminal:**

```bash
batao "Translate 'Hello, world!' to Spanish." -t 0.2
```
This command takes an English phrase as input and uses a lower temperature setting (0.2) to ensure a more accurate and less creative translation. The translated Spanish text is then displayed on the terminal.

**3. Write Python code to a file:**

```bash
batao "Write a Python function to calculate the factorial of a number." -o factorial.py
```

This command takes a prompt asking for a Python function that calculates factorials. The generated code will be saved into a file named `factorial.py`.

**4. Generate ideas for a website with a higher temperature for more creative output and print the output on terminal:**

```bash
batao "Give me some website ideas." -t 0.8
```
This command prompts the model to generate website ideas, setting the temperature to 0.8 to encourage more creative and unconventional suggestions. The ideas will be printed on the terminal.

**5. Use input from a file and save output to another file:**

```bash
batao -i prompt.txt -o output.txt
```
This command reads a prompt from a file named `prompt.txt` and saves the generated response to a file named `output.txt`.

**6. Request code review and get efficiency suggestions:**

Create a file named `website_code.md` with the following content:

````markdown
I'm building a simple website to display my photography portfolio. Can you review the following HTML, CSS, and JavaScript code for any potential improvements?  Also, I'm not sure my JavaScript image gallery is very efficient. Can you suggest a better approach?

index.html
```html
<!DOCTYPE html>
<html>
<head> 
<title>My Portfolio</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="gallery">
    </div>

  <script src="script.js"></script>
</body>
</html>
```

styles.css
```css
#gallery {
  display: flex;
  flex-wrap: wrap;
}

img {
  width: 200px;
  height: 200px;
  margin: 10px;
}
```

script.js
```javascript
const gallery = document.getElementById('gallery');
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // ... more images
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img');
  img.src = images[i];
  gallery.appendChild(img);
}
```
````

Run the command:

```bash
batao -i website_code.md -o code_review_results.md
```

This command instructs `batao` to read the code and request from `website_code.md`, analyze it, and provide feedback in the `code_review_results.md` file. 

> [!TIP]
> ## Gemini AI Models: Pro vs. Flash
>**Flash Model:**
>* **Use Cases:** Best for quick tasks, simple content generation, and applications that require fast responses. Ideal for chatbots, lightweight code generation, and short translations. 
>* **Rate Limits:** Typically has more generous rate limits, allowing for frequent requests. 
>
>**Pro Model:**
>* **Use Cases:** Suitable for complex reasoning, in-depth content creation, and tasks requiring higher accuracy and understanding. Use it for advanced code generation, long-form writing, and detailed research.
>* **Rate Limits:** May have stricter rate limits compared to the Flash model.

## Use Cases for Programmers

Batao can be an invaluable tool for programmers:

* **Code Feedback:**  Ask Batao to review your code by providing it within a markdown file using code blocks. Get suggestions for improvement, potential errors to look for, and best practice reminders.
* **Debugging Help:**  Describe the bug you're encountering along with relevant code snippets in a file.  Batao can help identify the source of the problem and may even suggest solutions.
* **Practice Coding Challenges:** Ask Batao to create programming challenges for you.  This is a great way to solidify concepts and prepare for technical interviews.
* **Code Explanation:** Don't understand a concept or block of code?  Ask Batao to explain it in simpler terms by putting the code in a Markdown file and adding your question as a prompt. This is like having an instant coding tutor.
* **Prototype Ideas Quickly:** Test out new ideas or concepts quickly by asking Batao to generate basic code structures.
* **Summarize Notes:** Have lengthy code comments or technical documentation?  Ask Batao to summarize them for you to quickly grasp the key information.

### Contributing

Contributions are welcome! Please feel free to open issues and submit pull requests to help improve Batao. 
