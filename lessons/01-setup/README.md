# Lesson 01: Set Up VS Code, Node.js and Chrome DevTools

Part of **JavaScript: Zero to Warrior**, a free JavaScript course for beginners.
Video: coming soon · Full course: https://www.youtube.com/playlist?list=PLPyBpER1_WP8

## What's in this lesson
- **VS Code** is the editor where you write your code: https://code.visualstudio.com/download
- **Node.js** runs JavaScript outside the browser, and it comes with **npm**, which downloads tools like Vite.
  Get the **LTS** version (long-term support): https://nodejs.org/en/download (v26.13.0 when this was recorded;
  a newer LTS is fine). On a Mac it's the **macOS Installer (.pkg)**, on Windows the **Windows Installer (.msi)**.
- **Google Chrome** shows your page, and its **DevTools Console** shows what your JavaScript is doing:
  https://www.google.com/chrome/
- **Vite** sets up the project and serves the page while you work. It needs Node.js 20.19+ or 22.12+
  (https://vite.dev/guide/). You don't install it yourself: npm gets it.

## Check your tools (in VS Code: Terminal → New Terminal, or Control + backtick)
```
node --version     # v26.x if you just installed the LTS (this lesson's Mac says v22.23.1, also fine)
npm --version      # 11.x with Node 26 (10.9.8 on this lesson's Mac)
```
- An error like "command not found"? Close VS Code, open it again, and try again (the terminal gets VS Code's
  environment from when it started).
- **Windows:** if npm says *running scripts is disabled on this system*, that's PowerShell's execution policy.
  Microsoft's fix, once, in the terminal: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
  (https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies).

## Make the course project (the same commands on Windows)
```
cd Desktop                 # Windows, with OneDrive backing up your Desktop: cd OneDrive/Desktop
npm create vite@latest js-course -- --template vanilla
                           # "Ok to proceed? (y)": type y and hit enter
                           # "Install with npm and start now?": Right arrow to No, then enter
cd js-course
npm install
npm run dev
```
Then open the folder in VS Code (File → Open Folder → Desktop → js-course → Open; if VS Code asks, click
**Trust Folder & Continue**), and **Command-click** (Windows: **Control-click**) the `Local:` link,
`http://localhost:5173/`. It opens in your default browser; if that isn't Chrome, type `localhost:5173` into
Chrome's address bar. Open the Console with **Command Option J** (Windows: **Control Shift J**).
Stop the server with **Control C** (Control on a Mac too).

## Files
- `solution/`: the js-course project exactly as `npm create vite@latest js-course -- --template vanilla` made it
  (create-vite 9.3.4), plus the `package-lock.json` that `npm install` wrote. No `node_modules` (npm install makes it).
- `starter/`: the "your turn" exercise, as a checklist with TODOs.

## Run the solution
```
cd solution
npm install
npm run dev
```

## Practice
1. In the Console, type `10 * 3`, then `"2" + 2`. Before you hit enter on each one, say what you think it prints.
   (The Console's gray preview under the prompt shows the answer as you type.)
2. Stop the server with Control C, then start it again with `npm run dev`. Open the page without clicking the link:
   type `localhost:5173` into Chrome's address bar.
3. Leave the server running, open a second terminal (the **+** in the terminal panel), and run `npm run dev` again
   in the same folder. Read what Vite prints: it says `Port 5173 is in use, trying another one...` and serves the
   page at `http://localhost:5174/`. Stop both with Control C.
