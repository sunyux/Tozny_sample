# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Possible errors

1." Module not found: Error: Can't resolve 'fs' in ..."

 Solution：
 Add 
```JavaScript
resolve: {
    fallback: {
      fs: false,
    },
  },
```
in rock-paper-scissors/node_modules/react-scripts/config/webpack.config.js
>Specifying the value of "empty" or false for fs is telling Webpack to ignore that module and not attempt to bundl it.
>Why this happens? Some modules are isomorphic meaning that support both browser and node.js. The bundler like Webpack cannot simply figure out the if native module should be excluded or not. (With ESM Modules, tree shaking and sideEffect, Webpack can handle this well to a great extent.)

2.“Module not found: Error: Can't resolve 'path' in '...'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
    - add a fallback 'resolve.fallback: { "path": require.resolve("path-browserify") }'
    - install 'path-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
    resolve.fallback: { "path": false }"

Solution：

Step1-Add 
```JavaScript
resolve: {
    fallback: {
       path: require.resolve("path-browserify"),
       crypto: require.resolve("crypto-browserify"),
    },
  },
```
in rock-paper-scissors/node_modules/react-scripts/config/webpack.config.js - module.exports

Step2-run 
```python
npm i path-browserify
```
in your terminal

Step3-restart your server for the changes to take effect
>when upgrading from webpack v4 to v5, need to clean up 

I add 
```fallback:{ 
              crypto: require.resolve("crypto-browserify"),
              stream: require.resolve("stream-browserify"),
              path: require.resolve("path-browserify"),
              http: require.resolve("stream-http"),
              https: require.resolve("https-browserify"),
              os: require.resolve("os-browserify/browser"),
              fs: false,
              buffer: require.resolve("buffer/"),
              url: require.resolve("url/")
          },
``` in config.js