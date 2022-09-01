## React Native

composant : < Etat (donnée) + comportements + Rendu (affichage)>
C'est du javascript et jsx: représenter les composants réact sous forme de balise
+babel => compréhension du navigateur
[link-readplayer-react](https://www.youtube.com/watch?v=7sDY4m8KNLc)
[link-react-md](https://github.com/facebook/create-react-app/blob/main/README.md)

# Create React App [![Build Status](https://dev.azure.com/facebook/create-react-app/_apis/build/status/facebook.create-react-app?branchName=main)](https://dev.azure.com/facebook/create-react-app/_build/latest?definitionId=1&branchName=main)

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />

Create React apps with no build configuration.

- [Creating an App](#creating-an-app) – How to create a new app.


## Quick Overview

```sh
npx create-react-app my-app
cd my-app
npm start
```

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.


Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>


## Creating an App

**You’ll need to have Node 14.0.0 or later version on your local development machine** (but it’s not required on the server). We recommend using the latest LTS version. 

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-app my-app
```

### npm

```sh
npm init react-app my-app
```

### Yarn

```sh
yarn create react-app my-app
```
### Git clone react starter
```sh
git clone --single-branch -b react-mini https://github.com/safak/youtube.git

yarn
```

### Get started with Material ui
```sh
npm install @mui/material @emotion/react @emotion/styled

npm install @mui/icons-material


```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## Tools bag
[prettier-your-code](youtube.com/watch?v=bfyI9yl3qfE)
[REACT : 1H POUR COMPRENDRE LA LIBRAIRIE ](https://www.youtube.com/watch?v=no82oluCZag&t=334s)


