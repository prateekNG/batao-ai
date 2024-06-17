## 👫 Buddy Up for Git & GitHub Challenge! 👫

Let's get started! This challenge will help you get comfortable using Git and GitHub with a buddy.  You'll learn how to:

* Create and fork repositories
* Manage branches
* Make pull requests
* Merge code changes

**Before you start:**

1. **Find a partner!** You'll both need GitHub accounts.
2. **Decide who will be Partner A and Partner B.**  Partner A will create the original repository.

---

### Part 1: Setting Up the Project (Partner A)

**Partner A, it's your turn first!**

1. **Create a new repository:**
   - Go to your GitHub homepage and click the green "New" button.
   - Name your repository something fun, like "git-challenge" or "awesome-project".
   - You can keep it public.
   -  **(Add Image: Screenshot of creating a new repo on GitHub)**
   - Click "Create repository"!

2. **Clone the repository to your computer:**
   - On your repository page, click the green "Code" button and copy the HTTPS URL.
   - Open your terminal/command prompt.
   - Type `git clone <paste your repository URL here>` and press Enter.
   -  **(Add Image: Screenshot of copying the repository URL and using git clone in the terminal)**

3. **Create a `.gitignore` file (Optional but Recommended):**
   - In your terminal, navigate to your new repository's directory: `cd <your repository name>`
   - Create a `.gitignore` file: `touch .gitignore`
   - Open this file in a text editor and add patterns to exclude files you don't want to track (e.g., `*.log`, `node_modules/`). This keeps your repository clean and focused.
   -  **(Add Image: Example of a simple .gitignore file)**

4. **Create a new branch for your feature:**
   - In your terminal: `git checkout -b featureA`
   - **Tip:** Use descriptive branch names for real-world projects (e.g., "add-login-feature", "fix-homepage-layout")
   -  **(Add Image: Screenshot of terminal showing navigating to the directory and creating a new branch)** 

5. **Now, share your repository link with Partner B and relax! They'll take it from here.** 

---

### Part 2: Forking and Branching (Partner B)

**Alright Partner B, time to shine!**

1. **Fork the repository:**
   - Go to your Partner A's repository page on GitHub (they shared the link, right?).
   - Click the "Fork" button at the top right corner.
   -  **(Add Image: Screenshot of forking a repository on GitHub)**
   - You now have a copy of the repository under your GitHub account!

2. **Clone your forked repository:**
   - Just like Partner A did, copy the HTTPS URL of **your forked repository**.
   - Open your terminal/command prompt.
   - Type `git clone <paste your forked repository URL here>` and press Enter.
   -  **(Add Image: Screenshot of copying the forked repository URL and cloning it in the terminal)**

3. **Create a new branch for your feature:**
   - Navigate to your forked repository's directory: `cd <your forked repository name>`
   - Create a branch: `git checkout -b featureB` 
   - **Tip:** Use descriptive branch names, just like Partner A!
   -  **(Add Image: Screenshot of terminal showing navigating to the directory and creating featureB branch)**

---

### Part 3: Building Awesome Features (Both Partners)

**It's coding time! Both partners will now work simultaneously.**

## The Challenge:  Building a Simple Recipe Website 🍲 💻

You and your partner will create a basic HTML website that displays your favorite recipes. 

**Partner A:** You'll focus on creating the structure and styling of the webpage.
**Partner B:** You'll be in charge of adding the recipe content.

### Partner A: Webpage Structure and Style (featureA)

1. **Create the basic HTML structure:**
   - Create a file named `index.html`.
   - Add the essential HTML tags: `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>`.
   - Inside the `<head>` tag, add a `<title>` with a relevant title like "Our Favorite Recipes".
2. **Add CSS for styling (optional, but encouraged):**
   - Create a file named `style.css`.
   - Link this file to your `index.html` within the `<head>` tag using:
     ```html
     <link rel="stylesheet" href="style.css"> 
     ```
   - Add some basic styles: choose fonts, colors, and layout styles to make your website visually appealing.
3. **Create placeholders for Partner B's recipe content:**
   - Inside the `<body>` of your `index.html`, add comments to indicate where Partner B will insert their recipe content. For example:
   ```html
   <h1>Our Favorite Recipes</h1>

   <h2><!-- Partner B will add recipe title here --></h2>
   <p><!-- Partner B will add recipe ingredients here --></p>
   <p><!-- Partner B will add recipe instructions here --></p>

   <h2><!-- Partner B will add another recipe here --></h2> 
   ```

### Partner B:  Recipe Content  (featureB)

1. **Open the `index.html` file.**
2. **Replace the placeholders with your recipe content.**
   - Find the comments Partner A left and replace them with your amazing recipes!
   - Use HTML tags like `<h2>` for recipe titles, `<p>` for ingredients and instructions, and even `<ul>`, `<ol>`, and `<li>` for lists if needed.

### Example Recipe Structure:

```html
<h2>Chocolate Chip Cookies</h2>
<p>**Ingredients:**</p>
<ul>
    <li>1 cup (2 sticks) unsalted butter, softened</li>
    <li>3/4 cup granulated sugar</li>
    <li>3/4 cup packed brown sugar</li>
    <li>2 large eggs</li>
    <li>2 1/4 cups all-purpose flour</li>
    <li>1 teaspoon baking soda</li>
    <li>1 teaspoon salt</li>
    <li>2 cups chocolate chips</li>
</ul>

<p>**Instructions:**</p>
<ol>
    <li>Preheat oven to 375 degrees F (190 degrees C).</li>
    <li>Cream together the butter, granulated sugar, and brown sugar until smooth.</li>
    <li>Beat in the eggs one at a time, then stir in the vanilla.</li>
    <li>In a separate bowl, whisk together the flour, baking soda, and salt.</li>
    <li>Gradually add the dry ingredients to the wet ingredients, mixing until just combined.</li>
    <li>Stir in the chocolate chips.</li>
    <li>Drop by rounded tablespoons onto ungreased baking sheets.</li>
    <li>Bake for 9 to 11 minutes, or until golden brown.</li>
    <li>Let cool on baking sheets for a few minutes before transferring to a wire rack to cool completely.</li>
</ol>
``` 

---
### Part 4: Merging, Pushing, and Pulling 

Follow the instructions in **Part 4** through **Part 6** of the original guide to merge your awesome features and create a delicious recipe website! Remember to:

* Commit your changes frequently and use descriptive commit messages. 
* Push your changes to your respective branches. 
* Partner A will merge `featureA` into `main`.
* Partner B will merge `upstream/main` into `featureB` to resolve any potential merge conflicts. 
* Partner B will create a pull request.
* Partner A will review and merge the pull request. 

---

## Bon Appétit!  👨‍🍳👩‍🍳

You've now completed the Git & GitHub Buddy Challenge and hopefully have a tasty website to show for it!