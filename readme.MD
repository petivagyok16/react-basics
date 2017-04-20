## React basics

### Installation

- `npm install` to install all the packages
- `npm start` to run the project
- on Windows change the current build commands in `package.json` to the following:
```
"build": "webpack -d && xcopy \"docs/index.html\" \"dist/index.html\" /F /Y && webpack-dev-server --content-base docs/ --inline ",
"build:prod": "webpack -p && xcopy \"docs/index.html\" \"dist/index.html\" /F /Y"
```

### Bundling
- `npm run build` for a development bundle
- `npm run build:prod` for a production bundle

### Requirements
- Latest node & npm
- osx

