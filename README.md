# MusicWebsite :musical_note:


In this repo, is the official [Sybersyn](https://sybersyn.com) website.

The page has two main building blocks:

1. [Sanity](https://sanity.io) - a headless CMS
2. [Remix](https://remix.run) - a SSR framework for React

## Core Technologies

### [Typescript](https://www.typescriptlang.org/)

Make sure to have all the necessary plugins etc set up in your IDE.

### [Tailwind](https://tailwindcss.com/)
Add the proper tooling to your IDE.

### [DaisyUI](https://daisyui.com/)
Pre-styled Tailwind CSS Components.

### [ConvertKit](https://app.convertkit.com)
ConvertKit is used for processing subscribers.

### [Sanity](https://sanity.io)

See more information [here](./studio/README.md).

### [Remix](https://remix.run)

See more information [here](./web/README.md).

## Workflows

### Permissions :lock:

You will need access to enviroment variables, these are stored on Netlify or ask me. :key:

### Sanity/CMS

#### To gain access to Sanity Studio

Email address will need permission:exclamation: 

#### To run Sanity Studio locally

`npm install -g @sanity/cli`

`cd studio && npm run dev`


### Remix react

#### To run development server

`cd web && npm run dev`

### Deployment

The website is deployed and hosted via [Netlify](https://www.netlify.com/) and can be viewed at `https://www.sybersyn.com/`
