# Adding React to an Existing non-react application

## The problem this repo was built to solve
I have an existing application that was build using node.js, express, .ejs, html, css, javascript

Now, I wish to add react to that application.

After a fair amount of time researching, below are the options I have to add react to that application:
  1. Rebuild the application from scratch using React (hahahaha * crying inside *)
  2. Build a react application for any future endpoints, and place them behind an endpoint such as `/foobar/*`
    - Then any requests routed to, say, `/foobar/dashboard` or `foobar/account` will directed to the new react application
    - This requires some extra proxying (probably not too hard) and additional setup, but definietely better than option #1
  3. Inject react components only into where they are needed.
    - This is the least amount of work, all you need to do is setup babel, a module bundler (like "webpack" or "parcel" - I chose parcel because of its ease of use)


I chose solution 3 above because it allows to inject react components into specific locations on HTML pages, without requiring me to rewrite the application in react or do a bunch of other setup. Plus, it takes a step in the direction of converting the application to react, and that work can still be done later if deemed worthwhile.

## How to add react components into an existing application
Okay, so here's how I'm injecting react components into this application.

Step 1: I setup a location to store the react components, I randomly, without much long-term thought (because this is a proof of concept!) chose `application/public/js/components`

Step 2: Now that you have these components, you need to transpile (using babel) and bundle them (using parcel or webpack or whatever) into a react build. I chose to use parcel. I ran `npm install parcel` and added the script `build` into `package.json`. Parcel is great (in my opinion) because that is ALL the setup I had to do, how nice. (I technically also added a "target" attribute to package.json to setup the location of the react components, and you would also need to do the same, but now, thats officially all you have to do!). **Note:** Parcel comes with babel and is transpiling everything under the hood for you during the build process.

Step 3: Now we have our react components, they've been transpiles with babel, and bundled using parcel, now we need to inject them into the application! I added the location to the `/build` or also called `/dist` in express with the line: `app.use(express.static('/build'))` to `index.js`. This tells express that I want my UI pages to have access to the build react components, this step leads into step 4.

Step 4: Add a src tag in your index.html/index.ejs/whatever-primary-html-file-name.html that references the transpiled/bundled react components. In my `application/views/index.ejs` I added `<script src="/App.js" type="text/javascript"></script>`


**Note:** A lot of the decisions I chose above matched my use case, but if you understand the process around #1 needing a transpiler, #2 needing a bundler (like webpack or parcel or ect), #3 referencing the built/bunded react components into your `index.html`, then you can reverse engineer this process to match your specific needs.

