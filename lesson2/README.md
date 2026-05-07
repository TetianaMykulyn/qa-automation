# Lesson 2: Introduction to Git and GitHub

Welcome to Lesson 2 of the QA Automation with TypeScript course! In this lesson, we will explore version control using Git and GitHub, essential tools for any software development and QA automation project.

## What is Git?

Git is a distributed version control system that allows you to track changes in your code over time. It enables multiple developers to work on the same project simultaneously without conflicts, and it provides a history of all changes made to the codebase.

Key features of Git:
- **Version Control**: Track changes to files and revert to previous versions if needed.
- **Branching**: Create separate branches for new features or bug fixes.
- **Collaboration**: Merge changes from different contributors.
- **Distributed**: Each developer has a full copy of the repository.

## What is GitHub?

GitHub is a web-based platform that hosts Git repositories. It provides additional features on top of Git, such as:
- **Remote Repositories**: Store your code online and access it from anywhere.
- **Collaboration Tools**: Pull requests, issues, and project boards for team coordination.
- **CI/CD Integration**: Automate testing and deployment pipelines.
- **Open Source Community**: Share and contribute to public projects.

## Basic Git Commands

Here are some fundamental Git commands you'll use frequently:

- `git init`: Initialize a new Git repository.
- `git add <file>`: Stage changes for commit.
- `git commit -m "message"`: Commit staged changes with a descriptive message.
- `git status`: Check the status of your working directory and staging area.
- `git log`: View the commit history.
- `git branch`: List, create, or delete branches.
- `git checkout <branch>`: Switch to a different branch.
- `git merge <branch>`: Merge changes from one branch into another.

## Setting Up a Repository

1. Install Git on your system.
2. Create a GitHub account if you don't have one.
3. Initialize a local repository: `git init`
4. Add your files: `git add .`
5. Make your first commit: `git commit -m "Initial commit"`
6. Create a repository on GitHub.
7. Link your local repository to GitHub: `git remote add origin <repository-url>`
8. Push your code: `git push -u origin main`

## Git and GitHub in QA Automation

In QA automation, Git and GitHub play crucial roles:
- **Version Control for Test Scripts**: Keep track of changes in your automation scripts.
- **Collaboration**: Team members can work on different test suites simultaneously.
- **Code Reviews**: Use pull requests to review and approve test code changes.
- **Continuous Integration**: Integrate with CI tools to run automated tests on code changes.
- **Issue Tracking**: Link test failures to GitHub issues for better tracking.

## Next Steps

In this lesson's directory, you'll find `test_file.txt` as an example file. Practice the Git commands by initializing a repository, making changes, and pushing to GitHub.

Remember, version control is not just about backing up your code—it's about enabling efficient collaboration and maintaining a clear history of your project's evolution.

Happy coding!