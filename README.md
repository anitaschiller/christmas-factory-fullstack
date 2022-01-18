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

5. Add the following script to your `package.json`: `"test": "jest --watch"`
