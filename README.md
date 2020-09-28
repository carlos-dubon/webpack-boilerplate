# 📦 Webpack 4 boilerplate

Minimal Webpack boilerplate with TypeScript, SCSS, TSLint and Webpack Dev Server.

## 💿 Installation

    $ git clone https://github.com/carlos-dubon/webpack-boilerplate.git
    $ npm i

## Usage

### 📦 Production build

    $ npm run build


### 💻 Development server

    $ npm run serve
> You can view the development server at localhost:8081

## Features

- [Typescript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [TSLint](https://palantir.github.io/tslint/)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)

## Dependencies

### Webpack

-   [`webpack`](https://github.com/webpack/webpack)  - Module and asset bundler.
-   [`webpack-cli`](https://github.com/webpack/webpack-cli)  - Command line interface for Webpack.
-   [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server)  - Development server for Webpack.

### Loaders

- [`ts-loader`]() - TypeScript loader for webpack.
-   [`sass-loader`](https://webpack.js.org/loaders/sass-loader/)  - Load SCSS and compile to CSS.
-   [`node-sass`](https://github.com/sass/node-sass)  - Node Sass.
-   [`css-loader`](https://webpack.js.org/loaders/css-loader/)  - Resolves CSS imports into JS.
-   [`file-loader`](https://webpack.js.org/loaders/file-loader/)  - Copy files to build folder.
-   [`url-loader`](https://webpack.js.org/loaders/url-loader/)  - Encode and inline files. Falls back to file-loader.

### Plugins

-   [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin)  - Copy files to build directory.
-   [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin)  - Generate HTML files from template.
-   [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin)  - Extract CSS into separate files.

## Author
- [Carlos Dubón](https://github.com/carlos-dubon/)

## 🔑 License

[MIT](https://github.com/carlos-dubon/webpack-boilerplate/blob/master/LICENSE)
