# christmas-factory-fullstack

This is an example project of a Christmas Web Shop in React and Express. It consists of a client directory holding the React App and a server directory which serves the API.

How to install and run:

1. `git clone REPO`
2. `npm install`
3. `npm run dev` to start both client and server in the dev environment
4. `npm run build` to build the client React app
5. `npm start` to run the server which serves the client and the API as if it's deployed

In order to persist data in MongoDB, please take a look in the `.env.example` and create an `.env` file locally holding your database credentials

## Happy X-Mas Shopping 🎅🏽.

_NOTE_: vite is by default installed as a dev dependency and in production (e.g. Heroku) dev dependencies are not installed!
In order to build the React App, Heroku needs vite which is not available, so it´s throwing an error.
To let know Heroku to install also dev dependencies, we need to set `NPM_CONFIG_PRODUCTION` to `false`.

Set the Environment Variable `NPM_CONFIG_PRODUCTION` to `false` in the `Config Vars` section in the Heroku user interface (your database credentials go there as well)  
– or –  
Using heroku cli: `heroku config:set NPM_CONFIG_PRODUCTION=false`  
– or –  
in the npm `postinstall` script we can add `NPM_CONFIG_PRODUCTION=false`  
– or –  
We can add vite as main dependency. 🤷🏼‍♀️

## Using Jest with Vite

1. Install Jest for the React Client --> `cd client`
2. `npm install -D jest babel-jest @babel/preset-env @babel/core @babel/preset-react babel-preset-react-app jest-watch-typeahead`
3. Add the following code to a new file `jest.config.js`:

```js
module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  resetMocks: true,
};
```

4. Add the following code to a new file `.babelrc`:

```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

5. Add the following script to your `package.json`: `"test": "jest --watchAll --verbose"`
6. Install Jest code completion: `npm install -D @types/jest`

## Using Cypress
1. Install Cypress for the React client --> `cd client`
2. `npm install cypress`
3. Add the following code to a new file `cypress.json`:

```js
{
  "baseUrl": "http://localhost:3000",
  "integrationFolder": "tests/e2e",
  "video": false,
  "fixturesFolder": "tests/e2e/fixtures",
  "defaultCommandTimeout": 10000
}
```
4. Add the following scripts to your client's `package.json`
- `"cy:open": "cypress open"`
- `"cy:run": "cypress run"`

5. Add the follwing scripts to your root folder's `package.json`:
- `"cy:open": "cd ./client && npm run cy:open"`
- `"cy:run": "cd ./client && npm run cy:run"`

6. Create a `tests/e2` folder inside your client --> add test files here
7. In order to use Cypress code completion add the following line to each test file: `/// <reference types="Cypress"/>`
