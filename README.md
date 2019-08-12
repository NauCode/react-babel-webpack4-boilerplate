# react-babel-webpack4-boilerplate
It is just a basic boilerplate I made to quickly start coding my prototypes using React.JS, Babel and Webpack 4.

## Features
- Preact (check that awesome thing [here](https://github.com/preactjs/preact)) (full compatibility with React and any React module)
- CSS, SCSS and SASS support
- WebPack 4
- Babel 7
- Hot Module Replacement
- Dev and Production Builds
- Dist Folder Managagement by Webpack
- Common and environment specific Webpack Configuration
- Composition of Webpack Configuration
- Source Maps
- Environment Variables
- Webpack Add-Ons
- ESLint + Prettier
- Support CSS-in-JS (using [Astroturf](https://github.com/4Catalyzer/astroturf))
- Support Images and Fonts bundling
- Added Scope hoisting
- Added Tree Shaking
- Added Code Splitting and Lazy Loading of Modules
- More to come!

## Important things
It is an optimized boilerplate but it has room to more optimizations so feel free to collab.

For example, it is using Preact instead React to reduce the bundle size.

Also we are using Scope hoisting in production build.

Since we are using Tree Shaking be sure to code your project using ES6 module syntax.
For example, use this:
> import { connect } ​from ”react-redux”​; ​​
Instead of:
> import reactRedux ​from ”react-redux”​; 



## How to use?
Just clone the repo (or download it), rename the folder and the project name in package.json and execute npm install so the dependencies are installed.

Be sure to set your .env.development and .env.production files as ignored on .gitignore!

Have fun! 