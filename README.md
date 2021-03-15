# mybeacon
> Additional information or tagline

Application for controlling the mybeacon hardware.
User can track current mood and explore pre-defined mood themes.

## Installing / Getting started

```shell
npm install 
expo start
```

An expo console will open in your web browser. To see options for running the application, see console commands that follow "expo start".

### Initial Configuration

Copy and paste your Firebase API key into src/firebase.js

## Developing

```shell
git clone git@github.com:cs394-w21/mybeacon.git
cd mybeacon/
packagemanager install
```

### Deploying / Publishing

The CI action has been set up to deploy commits to the main branch on push; however, should you need to deploy manually, below are the instructions
```shell
expo build:web
firebase deploy
```

## Links

Even though this information can be found inside the project on machine-readable
format like in a .json file, it's good to include a summary of most useful
links to humans using your project. You can include links like:

- Repository: https://github.com/cs394-w21/mybeacon/
- Issue tracker: https://github.com/cs394-w21/mybeacon/issues

## Bugs
Current iteration is only supported on a modern web browser.
Screen formatting and styling works best on an iphone X sized window.
