# Mission 0: Get the code, the professional way

**Name:**
**GitHub username:**

## Evidence

### `git remote -v`


paste here
```

### `git branch`
```
paste here
```

### `git status` before the `.gitignore` fix
```
Your branch is up to date with 'origin/assignment1'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        node_modules/
        package-lock.json
```

### `git status` after the `.gitignore` fix
```
On branch assignment1
Your branch is up to date with 'origin/assignment1'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .gitignore

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        package-lock.json

no changes added to commit (use "git add" and/or "git commit -a")
```

## Questions

1. Which folder should not be committed, and why? Give one practical reason and one security-related reason.

   > node_modules/

2. What line or lines did you add to `.gitignore`? What does a trailing `/` mean in a `.gitignore` pattern?

   > node_modules/, the trailing '/' means directory

3. **Connections:** in one or two sentences, what is the difference between a **fork** and a **clone**? Which one lives on GitHub and which one lives on your machine?

   > clone downloads a copy of the reposity onto your local machine where as a fork creates a copy of a repository on a cloud service like GitHub for you

## Documentation log

| Page I used, with URL | One thing I learned from it |
|---|---|
| | |
