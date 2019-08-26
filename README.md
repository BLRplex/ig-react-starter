# React Boilerplate

### Environment
Application is based on Create React App and has all its features. Webpack configuration is overrided with `config-overrides.js` file and you can change it as you want. At the moment it used for implementing path aliases for avoiding long relative imports (`@/` refers to `./src/` folder). ESLint based on "standard" and "standard-react" configurations with some redefinings (more details you can find in `.eslintrc` file).

### Installation
The installation process should be done with `yarn install`

### Running
Application starts with `yarn start` on port 3000 that could be redefined with environment variable PORT. Browser auto-start disabled but you can enable it in `.env` file, please pay attention on `BROWSER=none`. If you remove this line application will open browser window automatically.

### The initial application based on create-react-app and includes next libraries
- React
- React-dom
- React-redux
- React-router-dom
- Redux
- Redux-logger (only in dev environment)
- Redux-saga
- Styled-components

### Dev dependencies
- Eslint-config-standard
- Eslint-config-standard-react
- Eslint-plugin-node
- Eslint-plugin-prettier
- Eslint-plugin-promise
- Eslint-plugin-standard
- React-app-rewired
- Stylelint-config-recommended
- Stylelint-config-styled-components
- Stylelint-processor-styled-components
