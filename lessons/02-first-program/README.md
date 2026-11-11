# Lesson 02: Your First JavaScript Program (Browser and Node)

Part of **JavaScript: Zero to Warrior**, a free JavaScript course for beginners.
Video: coming soon · Full course: https://www.youtube.com/playlist?list=PLPyBpER1_WP8

## What's in this lesson
- `console.log(...)` prints whatever is in the parentheses: to the DevTools Console in the browser, or to the
  terminal when Node runs the file.
- A line that starts with `//` is a comment: a note for people. JavaScript skips it.
- Text goes inside quotes, and that's called a string. Without quotes, `2 + 3` is math, so it logs `5`.
- JavaScript runs a file from the top to the bottom.
- The page finds your code through `index.html`: `<script type="module" src="/src/main.js"></script>`.
- A missing closing quote stops the file from running. Vite shows the error on the page, with the file and the line.

## Files
- `solution/`: the Vite project from the video (`src/main.js` and `hello.js`), with one answer to the "your turn".
- `starter/`: the project as it is at the "your turn" pause, with TODOs in `hello.js`.

## Run it
In the browser (the dev server):
```
npm install
npm run dev
```
Open the link it prints, then open the Console: Command Option J on a Mac, Control Shift J on Windows.

With Node, in a second terminal in the same folder:
```
node hello.js
```

## Practice
1. In `src/main.js`, log three lines: your name, your favorite food, and `10 * 4`. Which one isn't text?
2. Put quotes around `2 + 3`, save, and look at the Console. What changed, and why?
3. Make the mistake on purpose: delete a closing quote and save. Read the file and the line in Vite's error, then fix it.
