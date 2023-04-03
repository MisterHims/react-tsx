# Our React Project

## Introduction

React-TS is my personal React environment to work. It is bootstrapped with Vite and uses Typescript as a programming language.

Here is the list of all the dependencies and frameworks used with this environment:

- React
- React-Dom
- React-Router-Dom
- PostCSS (postccs and postcss-cli)
- Autoprefixer
- Material-UI (@mui/material, @mui/base and @mui/joy)
- Emotion (@emotion/react and @emotion/styled)
- TailwindCSS
- Flowbite

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
yarn add react react-dom react-router-dom postcss postcss-cli autoprefixer tailwindcss @mui/material @mui/base @mui/joy @emotion/react @emotion/styled
```

With this command, all our libraries will be executed in sequence. If one of the commands fails, subsequent commands will not be executed.

It's done.

### PostCSS and TailwindCSS initialization

Create a file named `postcss.config.cjs` at the root of our project then add the following parameters:

```cjs
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
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

Then add the Tailwind directives to our `index.css`:

```pcss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> Note: It may be more relevant to use `App.css` instead.

In order to check the proper functioning of our CSS preprocessor and Tailwind, we can add the following HTML code to our `App.tsx`:

```html
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
```

We would normally notice a bold, underlined font

### Structure rearrangement

For more clarity in our project, it is important to restructure it according to our needs:

- Create a folder named 'styles' inside the 'src' folder and move all our css files (index.css and app.css)

- Update all of our relative links:
  - main.tsx: `import '../src/styles/index.css`
  - App.tsx: `import '../src/styles/app.css`

- Rename our capitalized files:
  - App.css into "app.css"
  - main.tsx into "Main.tsx"

## Our final structure

- The "src/assets" directory for images and other static files  to keep these assets separate from the main source code of the application.

- The "src/components" directory is a place to store the various reusable components that you will use in our application.

- The "src/layouts" directory for headers and footers if we plan to use these elements consistently across all pages in our application.

- The "src/pages" directory contain the components that represent the different pages of our application.

- The "src/routes" directory for routing configuration files to keep routing logic separate from the main application.

- The "src/styles" directory contain all of our application's style files, including the main CSS file.

- The "src/templates" directory for page templates if we plan to reuse similar layouts across multiple pages.

Ultimately, the structure of a React project may vary depending on each developer's preferences and needs, but the one we presented seems to be well thought out and easy to maintain.

## PostCSS Initialization

After setting up our desired structure, it is necessary to correctly initialize PostCSS in order to ask it to compile each of our style sheets in their user version.

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

It is important to add a new command for each new style sheet created, such as future component styles.

We can then run the `import 'yarn run build:css` command for each css file to generate the compiled CSS in the build/css directory. If the build/css directory does not exist, it will be created automatically when running the command :

```cli
yarn run build:css:index
```

We must then perform this operation for all the other css files. It is also possible to do this instruction in one go if our file does not contain end-of-line characters incompatible with our operating system (Linux or Windows).

When using PostCSS we want to make sure when we import our CSS, that we importing from the destination wherever we compiling our CSS to that's where whe want to be importing from.

If we modify our CSS files, the changes will not be applied in real time because React will only take into account our compiled CSS files which have not been automatically updated.

To do this, we could very well repeat our build:css command lines like before, but there is a much easier way to keep them up to date.

Instead of repeating this operation for each new css file modification, we can automate this process by using a "watch" tool that will monitor our CSS files and automatically run the build command whenever a file is modified. For that, we just need to add `--watch` or just `-w` and that's going to watch for changes.

But we don't need to build:css, we need watch:css so we can just add theses lines

```json
"scripts": {
  "watch:css:index": "postcss src/styles/global/index.css --dir build/styles/global -w",
  "watch:css:app": "postcss src/styles/global/app.css --dir build/styles/global -w",
  "watch:css:colors": "postcss src/styles/global/colors.css --dir build/styles/global -w",
  "watch:css:articles-template": "postcss src/styles/templates/articles-template.css --dir build/styles/templates -w",
  "watch:css:one-view-template": "postcss src/styles/templates/one-view-template.css --dir build/styles/templates -w",
  "watch:css:header": "postcss src/styles/layouts/header.css --dir build/styles/layouts -w",
  "watch:css:footer": "postcss src/styles/layouts/footer.css --dir build/styles/layouts -w",
  "watch:css:sidebar": "postcss src/styles/layouts/sidebar.css --dir build/styles/layouts -w",
}
```

It's done! We have initialized PostCSS.
