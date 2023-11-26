# Node.JS Starter Template

The goal of this repository is to offer a quick way to get up and running with a Node.Js project already configured with the basics that all/most Node.JS projects require.

With this template you will have a "Hello World" application, with a [Test Suite](#get-started-with-testing) hooked up, and a [Linter](#get-started-with-linting) preconfigured to catch syntax errors, coding mistakes, ect.

See [How to Run this Application](#how-to-run-this-application) next!

## How to Run this Application

  1. Clone this repository by running `git clone https://github.com/gavinvaske/nodejs_starter_template.git` in a terminal
  2. Open a terminal in the same directory of the cloned repo (i.e ***/nodejs_starter_template**) and run `npm install`
  3. Run the application via `npm start`
  4. Open a browser and navigate to `localhost:3000` and thats it, the rest is up to you to create.

Next, see the below sections to use other features that come with this starter template:
  * [How to write/run tests](#get-started-with-testing)
  * [How to use the linter](#get-started-with-linting)

## Get Started with Writing Code
All/most of the code that you will write for your project will live in the `application` folder.

This is where you will create all the code needed for your application to run. If you are creating an API, your endpoints will go here. If you're creating a website, your HTML and css will go into folders which should live within the`/application` folder.

Next, learn all about where to write tests in [this section](#get-started-with-testing) below


## Get Started with Testing
This project comes preinstalled with the [Jest](https://github.com/facebook/jest) dependency. **Jest** is a hugely popular and easy to use test library. There are other testing libraries out there, but I find this to be easy to use and works well. 

You can read more about Jest on their website [here](https://jestjs.io/).

A single test is included in this project and can be found in `test/index.spec.js`. You should continue to add tests as you write code and all tests should be located within files in the `/test` folder

To execute all the tests in the **/test** folder run `npm run test`

## Get Started with Linting
Many syntax errors/code mistakes can hide in Javascript. A linter will analyze your code in real time and report any problems it finds.

This project uses a hugely popular library called [eslint](https://github.com/eslint/eslint). A basic set of lint rules have already been configured and you can find them or edit them in the file called `.eslintrc.js`

This linter can be executed by running `npm run lint`

## Preconfigured Scripts You Can Run

This repo comes with a few scripts that are setup for you to use out of the box, below is a summary of each and every script that you have access to run and what it does.

  1. `npm run start`
      * Use this to start the application/server
  3. `npm run test`
      * Executes all tests found within the `/test` directory
  5. `npm run lint`
      * Checks all code and looks for problems. You can see/edit the lint rules it is uses in the file called `.eslintrc.js`
  7. `npm run fix-lint`
      * Attempts to fix simple eslint errors (i.e. missing semicolon, incorrect number of tab spaces, ect)
  9. `npm run verify`
      * Runs both of the commands `npm run test` AND `npm run lint` at the same time. Great to use before commiting code! (Hint Hint 😉)

## Run the application with Docker.
  1. [Download docker](https://docs.docker.com/get-docker/) onto your computer
  2. Clone this repo if you have not already, then navigate to the root directory in a terminal window
  3. Build a docker image of the application via the command: `docker build . -t <insert-image-name-here>`
      - **Ex:** docker build . -t my_awesome_application
  4. Run the docker image via: `docker run -p 49160:8080 <insert-image-name-here>`
      - **Ex:** docker run -p 49160:8080 my_awesome_application
  5. Visit `localhost:49160` to the application which is running in docker

## What Dependencies are included in this template?
This section describes all the dependencies that are included in this template. Some of the chosen dependencies have equivalent competitors, so the decision to use these is opion based. But from experience, the selected dependencies work very well, are hugely popular with a large community and have a minimal learning curve.

  1. [Express.js](https://expressjs.com/)
      * Used to easily create HTTP endpoints and much more. A dependency such as Express.js is a fundamental backbone to all/most Node.js applications
  2. [Jest](https://github.com/facebook/jest)
      * A framework for writing Tests for your application
  4. [Dotenv](https://github.com/motdotla/dotenv)
      * Whenever a `.env` file is used, you need this dependency to read to read it in
  5. [eslint](https://eslint.org/)
      * Used to analyze code and catch syntax or logic errors that may otherwise go unnoticed or cause issues
