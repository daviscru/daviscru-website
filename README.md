# DavisCru-AngularFire
[![Build Status](https://travis-ci.org/daviscru/daviscru-website.svg)](https://travis-ci.org/daviscru/daviscru-website)
## Development Environment Setup
1. Install NodeJS. This will vary depending on your Operating System.
2. Clone this repo and open a terminal in that folder.
3. Run `npm install` to install the command line tools.
4. Run `bower install` to install the web app dependencies.
5. Run `gulp server`. This command will run a local server and open a browser tab with live reloading.

## Building and Deployment
Upon push to the git repository, a Travis-CI build will be triggered. Its config is located in `.travis.yml`.

* It installs npm and bower dependencies.
* It then runs `gulp` which is equivalent to `gulp default` to build the project. Generally speaking, this command does the following:
  * Compiles SCSS files, minifies, and injects them into `index.html`
  * Runs jshint on the js files, minifies, and injects them into `index.html`
  * Inserts all html views into Angular's Template Cache
  * Copies all other files into the build output
* If the build is successful and the above commands complete without errors then the built code is deployed to the staging environment of Divshot

To move to the code to production, the staging environment can be promoted to production on the Divshot website.
