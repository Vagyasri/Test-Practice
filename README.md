![](https://img.shields.io/badge/Microverse-blueviolet)

# Jest-Setup
Setting up the Jest-pack for the future Projects

## Built With

- HTML
- CSS
- JavaScipt
- Webpack
- ES6
- Jest

## Author

👤 **Bhagyashree Patra**

- GitHub: [@Vagyasri](https://github.com/Vagyasri)
- Twitter: [@Vagyasri](https://twitter.com/Vagyasri)
- LinkedIn: [Bhagyashree Patra](https://www.linkedin.com/in/bhagyashree-patra-029bb059/)

## Getting Started

### Prerequisites:

- Web browser
- Code Editor (VS Code)
- Live Server Extension

### Cloning the repo to your local system (If you already have git, installed in your system):

- [Copy this link](https://github.com/Vagyasri/Jest-Setup.git)
- Open your terminal or command line
- Run "git clone [Paste this link](https://github.com/Vagyasri/Jest-Setup.git)"
- Open the folder with your code editor
- Now You can edit the code and check the changes in the browser using Live Server

## Steps:

### Basic Setup:

- Install Jest using NPM: `npm install --save-dev jest`
- Add the following section to your package.json:

    ```diff
        "scripts": {
    -       "test": "echo \"Error: no test specified\" && exit 1",
    +       "test": "jest",
            "start": "webpack serve --open",
            "build": "webpack"
            },
    ```

### For Running Jest:

- Run: `npm run test`

### Using Babel:

- Configure Babel to target your current version of Node by creating a `babel.config.js` file in the root of your project:

```diff
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

### Using TypeScript:

```diff
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
+   '@babel/preset-typescript',
  ],
};
```

### Get Live View in Localhost:

- Run: `npm start`

### Check linter errors:

- Install npm
- For HTML: Run npx hint .
- For CSS: Run npx stylelint "**/*.{css,scss}"
- For JS: Run npx eslint .

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Start by:

- Forking the project
- Cloning the project to your local machine
- cd into the Youtube-Replica project directory
- Run git checkout -b your-branch-name
- Make your contributions
- Push your branch up to your forked repository
- Open a Pull Request with a detailed description to the development branch of the original project for a review

Feel free to check the [issues page](https://github.com/Vagyasri/Jest-Setup/issues), contribute to the Project by creating an issue.


## Show your support
Give a ⭐️ if you like this project!
