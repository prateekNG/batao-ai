# Git: A Beginner's Guide

## What Problem Does Git Solve?

Imagine you're writing a story with your friends. Each of you writes different parts. How do you keep track of who wrote what? How do you make sure you don't overwrite each other's work? Git helps you solve these problems by providing a way to manage and track changes to files in a project.

### Hands-On

1. **Scenario**: You're working on a college project with your friends. You write code, your friends write code, and you need to combine everyone's work without losing anything.
2. **Solution**: Git helps you manage this by tracking changes and making it easy to combine everyone's work.

## What is Version Control?

Version control is a system that records changes to a file or set of files over time so you can recall specific versions later. Git is a popular version control system.

---

## Git Concepts

### Working Directory

The folder where you are currently working on your project.

### Staging Area

A place where you can group changes before making a commit.

### Commits

Snapshots of your project at a certain point in time. Each commit has a unique ID.

### Branch

A separate line of development. Think of it as a different version of your project where you can work on new features without affecting the main project.

### Merge

Combining changes from different branches into one.

---

## Setting Git Config

Before using Git, set your user information:

```bash
git config --global user.email "personal@email.com"
git config --global user.name "Your Name"
```

---

## Basic Git Commands

### Initialize a Git Repository

```bash
git init
```
Creates a new Git repository.

### Check Status

```bash
git status
```
Shows the status of changes as untracked, modified, or staged.

### Add Files to Staging Area

```bash
git add <filename>
git add .
```
Adds files to the staging area. `.` adds all files.

### Commit Changes

```bash
git commit -m "message"
```
Saves the changes to the repository with a message describing what was changed.

### Check Differences

```bash
git diff
```
Shows the differences between your working directory and the staging area.

### View Commit History

```bash
git log
```
Displays the commit history.

### Show Commit Details

```bash
git show
git show <CommitID>
```
Shows detailed information about a specific commit.

### Branching

```bash
git branch
```
Lists all branches in your repository.

### Checkout Branch

```bash
git checkout <branch>
```
Switches to the specified branch.

### Merge Branch

```bash
git merge <branch>
```
Merges the specified branch into the current branch.

---

## Keywords

- **Working Directory**: Your current folder where your project files are.
- **Repository**: A storage for your project files and their history.
- **Version Control**: A system that tracks changes to your files.
- **File Status**:
  - **Untracked**: Files not tracked by Git yet.
  - **Modified**: Files that have been changed.
  - **Added**: Files added to the staging area.
- **Stage**: Prepare changes to be committed.
- **Unstage**: Remove changes from the staging area.
- **Commit**: Save changes to the repository.
- **Log**: Show commit history.
- **Show**: Display detailed information about commits.
- **Diff**: Show differences between versions.
- **Merge**: Combine changes from different branches.
- **Branch**: Different lines of development.
- **Checkout**: Switch between branches.
- **HEAD**: The current snapshot or commit.

---

## Cheat-Sheet

```plaintext
# Set User Info
git config --global user.email "personal@email.com"
git config --global user.name "Your Name"

# Initialize Repository
git init

# Check Status
git status

# Add Files
git add <filename>
git add .

# Commit Changes
git commit -m "message"

# Check Differences
git diff

# View Commit History
git log

# Show Commit Details
git show
git show <CommitID>

# Branching
git branch

# Checkout Branch
git checkout <branch>

# Merge Branch
git merge <branch>
```

### Real-Life Example

Imagine you're writing a novel with friends. You each take a chapter (branch) and write it separately. Once you're done, you combine all chapters (merge) into one book (main branch).

---

This guide and cheat-sheet will help you understand and use Git effectively for your projects. Happy coding!