# Our React Project

## Introduction

React-TS is my personal React environment to work. It's bootstrapped with Vite and uses Typescript as a programming language.

Here is the list of all the dependencies and frameworks used with this environment:

* React
* React-Dom
* React-Router-Dom
* Concurrently (concurrently)
* clsx (clsx)
* PostCSS (postccs and postcss-cli) :
  * PostCSS Import (postcss-import)
  * PostCSS Utilities (postcss-utilities)
  * PostCSS Nested (postcss-nested)
  * CSS Nano (cssnano)
  * Preset ENV (postcss-preset-env)
  * PostCSS Mixins (postcss-mixins)
  * PostCSS Variables (postcss-simple-vars)
* Autoprefixer
* Material-UI (@mui/core, @mui/material, @mui/base, @mui/styles and @mui/joy)
* Emotion (@emotion/react and @emotion/styled)
* TailwindCSS
* Flowbite

### Base Installation

Let's start by creating my work environment with Yarn:

```cli
yarn create vite
```

Choose the project name then React - Typescript

### Installation

Once the installation is complete, we must now go to the folder of our project:

```cli
cd react-ts
```

We can now install all our libraries:

```cli
yarn add react react-dom react-router-dom react-particles @mui/material clsx @mui/core @mui/base @mui/styles @mui/joy flowbite tsparticles
```

And in dev mode:

```cli
yarn add -D postcss postcss-import postcss-cli postcss-preset-env cssnano autoprefixer tailwindcss @emotion/react @emotion/styled @types/react @types/react-dom @vitejs/plugin-react postcss-import postcss-nested postcss-utilities postcss-mixins postcss-simple-vars

```

It's done.

### PostCSS and TailwindCSS initialization

Create a file named `postcss.config.cjs` at the root of our project then add the following parameters:

```cjs
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
```

Now we can initialize our TailwindCSS with our project:

```cli
npx tailwindcss init
```

If during this process the file named `tailwind.config.cjs` has not been added, then create this new file at the project root and add the following parameters:

```cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Then temporarily add the Tailwind directives to our `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In order to check the proper functioning of our CSS preprocessor and Tailwind, we can add the following HTML code to our `App.tsx`:

```html
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
```

We would normally notice a bold, underlined font.

### Structure rearrangement

For more clarity in our project, it's important to restructure it according to our needs:

* Create a folder named 'styles' inside the 'src' folder and move all our css files (index.css and app.css)

* Update all of our relative links:
  * main.tsx: `import '../src/styles/index.css`
  * App.tsx: `import '../src/styles/app.css`

* Rename our capitalized files:
  * App.css into "app.css"
  * main.tsx into "Main.tsx"

## Our final structure

* The "src/assets" directory for images and other static files  to keep these assets separate from the main source code of the application.

* The "src/components" directory is a place to store the various reusable components that you will use in our application.

* The "src/layouts" directory for headers and footers if we plan to use these elements consistently across all pages in our application.

* The "src/pages" directory contain the components that represent the different pages of our application.

* The "src/routes" directory for routing configuration files to keep routing logic separate from the main application.

* The "src/styles" directory contain all of our application's style files, including the main CSS file.

* The "src/templates" directory for page templates if we plan to reuse similar layouts across multiple pages.

Ultimately, the structure of a React project may vary depending on each developer's preferences and needs, but the one we presented seems to be well thought out and easy to maintain.

## PostCSS Initialization

After setting up our desired structure, it's necessary to correctly initialize PostCSS in order to ask it to compile each of our style sheets in their user version.

To do this, we must go to our package.json file in order to create a build command for each CSS file to better organize the process of generating our project:

```json
"scripts": {
  "build:css:index": "postcss src/styles/global/index.css --dir build/styles/global",
  "build:css:app": "postcss src/styles/global/app.css --dir build/styles/global",
  "build:css:colors": "postcss src/styles/global/colors.css --dir build/styles/global",
  "build:css:articles-template": "postcss src/styles/templates/articles-template.css --dir build/styles/templates",
  "build:css:one-view-template": "postcss src/styles/templates/one-view-template.css --dir build/styles/templates",
  "build:css:header": "postcss src/styles/layouts/header.css --dir build/styles/layouts",
  "build:css:footer": "postcss src/styles/layouts/footer.css --dir build/styles/layouts",
  "build:css:sidebar": "postcss src/styles/layouts/sidebar.css --dir build/styles/layouts",
}
```

These instructions are thus clear and well organized. Each build:css command is intended to compile a specific CSS file using PostCSS and place the result in a specified destination folder into the build folder. It's easy to understand which command is for which CSS file.

It's important to add a new command for each new style sheet created, such as future component styles.

We can then run the `yarn run build:css` command for each css file to generate the compiled CSS in the build/styles directory. If the build/styles directory does not exist, it will be created automatically when running the command.

We can start by building our index.css file:

```cli
yarn run build:css:index
```

We must then perform this operation for all the other css files. It's also possible to do this instruction in one go if our file does not contain end-of-line characters incompatible with our operating system (Linux or Windows).

When using PostCSS we want to make sure when we import our CSS, that we importing from the destination wherever we compiling our CSS to that's where whe want to be importing from.

If we modify our CSS files, the changes will not be applied in real time because React will only take into account our compiled CSS files which have not been automatically updated.

To do this, we could very well repeat our build:css command lines like before, but there is a much easier way to keep them up to date.

Instead of repeating this operation for each new css file modification, we can automate this process by using a "watch" tool that will monitor our CSS files and automatically run the build command whenever a file is modified. For that, we just need to add `--watch` or just `-w` and that's going to watch for changes.

But we don't need to build:css, we need watch:css so we can just add theses `watch:css` commands:

```json
"scripts": {
    "build:css:index": "postcss src/styles/global/index.css --dir build/styles/global",
    "watch:css:index": "postcss src/styles/global/index.css --dir build/styles/global --watch",
    "build:css:app": "postcss src/styles/global/app.css --dir build/styles/global",
    "watch:css:app": "postcss src/styles/global/app.css --dir build/styles/global --watch",
    "build:css:colors": "postcss src/styles/global/colors.css --dir build/styles/global",
    "watch:css:colors": "postcss src/styles/global/colors.css --dir build/styles/global --watch",
    "build:css:articles-template": "postcss src/styles/templates/articles-template.css --dir build/styles/templates",
    "watch:css:articles-template": "postcss src/styles/templates/articles-template.css --dir build/styles/templates --watch",
    "build:css:one-view-template": "postcss src/styles/templates/one-view-template.css --dir build/styles/templates",
    "watch:css:one-view-template": "postcss src/styles/templates/one-view-template.css --dir build/styles/templates --watch",
    "build:css:header": "postcss src/styles/layouts/header.css --dir build/styles/layouts",
    "watch:css:header": "postcss src/styles/layouts/header.css --dir build/styles/layouts --watch",
    "build:css:footer": "postcss src/styles/layouts/footer.css --dir build/styles/layouts",
    "watch:css:footer": "postcss src/styles/layouts/footer.css --dir build/styles/layouts --watch",
    "build:css:sidebar": "postcss src/styles/layouts/sidebar.css --dir build/styles/layouts",
    "watch:css:sidebar": "postcss src/styles/layouts/sidebar.css --dir build/styles/layouts --watch",
}
```

It's done! We have initialized PostCSS.

## PostCSS Plugins

### CSSNano

It's a PostCSS plugin which we can add to our build process, to ensure that the resulting stylesheet is as small as possible for a production environment.

We have already previously installed CSSNano (preferably in dev mode) and we will see how to initialize it.

Then, we need to configure cssnano by editing the postcss.config.cjs file in the root of our project. This should contain cssnano as well as any other plugins that we might want for our project.

```cjs
module.exports = {
  plugins: [
    require('cssnano')({ preset: 'default', }),
    require('autoprefixer'),
    require('tailwindcss')
  ],
};
```

Note: If we do not notice the changes immediately, then we must use the watch:css command as seen previously.

Warning: in order to allow faster rendering for the user when using TailwindCSS with PostCSS and NanoCSS, it's recommended to move the preprocessor directives of Tailwind CSS contained in index.css (`@tailwind base; @tailwind components; @tailwind utilities ;`) in a new file named "_tailwind.css" which will then be compiled by NanoCSS, our main preprocessor.

Once these fixes are made, we can then add the following two lines to our package.json scripts:

```json
module.exports = {
  plugins: [
    "build:css:tailwindcss": "postcss postcss src/styles/components/_tailwind.css -o build/styles/components/tailwind.min.css",
    "watch:css:tailwindcss": "postcss src/styles/components/_tailwind.css -o build/styles/components/tailwind.min.css -w",
  ],
};
```

Then, we just need to import our tailwind.min.css into our index.css file with:

```css
@import "../../../build/styles/components/tailwind.min.css";
```

### Preset ENV

PostCSS Preset Env allows us to convert modern CSS into something most browsers can understand, determining the polyfills we need based on our targeted browsers or runtimes.

In our configuration file, we choose to enables the default features that is supported by all browsers and support nesting codes. We are also adding support for nested tailwind mode to make it work with Preset Env.

```cjs
module.exports = {
  plugins: [
    require('postcss-import'),
    require('cssnano')({ preset: 'default', }),
    require('postcss-nested'),
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.config.cjs'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': false
      }
    }),
  ],
};
```

Note: If the syntax of our `postcss.config.cjs` file does not use modern syntax based on ES6 modules with a `postcss.config.mjs` file, it's because TailwindCSS responds on our terminal that nested css has been detected but our file must be misconfigured (which is not not the case since it still works). It seems that this would be a known problem due to a conflict between TailwindCSS and PostCSS but that the founder of TailwindCCS does not want to make any effort to fix it.

For using the Syntax highlighting for our css files, we can use the PostCSS Language VSCode plugin then install it this way: <https://github.com/MhMadHamster/vscode-postcss-language/blob/master/README.md>

We can now use the watch:css command to render our stylesheets in real time.
