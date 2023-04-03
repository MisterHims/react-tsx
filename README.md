# Introduction

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

## Base Installation

Let's start by creating my work environment with Yarn:

```cli
yarn create vite
```

Choose the project name then React - Typescript

## Installation

Once the installation is complete, we must now go to the folder of our project:

```cli
cd react-ts
```

We can now install all our libraries:

```cli
yarn add react react-dom react-router-dom postcss autoprefixer tailwindcss @mui/material @mui/base @mui/joy @emotion/react @emotion/styled
```

It's done.

## PostCSS and TailwindCSS initialization

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

## Structure rearrangement

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