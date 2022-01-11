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
