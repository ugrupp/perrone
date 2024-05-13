# Autohaus Perrone Website 🚗

This website is based on [Hugo](https://gohugo.io/) as a static site generator and [Vite](https://vitejs.dev/) as the build tool. Originally it was based on [Gulp](https://gulpjs.com/) + [Webpack](https://webpack.js.org/) and was a heavily modified fork of [victor-hugo](https://github.com/netlify/victor-hugo).

This project is released under the [GPL-3.0](LICENSE). Please make sure you understand its implications and guarantees.

## Usage

### Prerequisites

You need to have [Node](https://nodejs.org/en/download/) 16 and [npm](https://www.npmjs.com/get-npm) installed in order to build this site.

Next step, clone this repository and run:

```sh
npm install
```

This will take some time and will install all packages necessary.

### Development

While developing your website, use:

```sh
npm run dev
```

A new browser should pop up to preview the site.

### Static build

To build a static version of the website inside the `/dist` folder, run:

```sh
npm run build
```

## SVG Prepare Task

Prepares SVGs for use within SVG sprite:

```sh
npm run svgo
```

## Enjoy!! 😸
