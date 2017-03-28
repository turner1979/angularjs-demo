# AngularJS Demo App

This is a demo app created as a test for a front end developer position, written in [AngularJS](https://angularjs.org/). 

## Setup

1. Clone the project using cmd or terminal `git clone https://github.com/turner1979/angularjs-demo.git`
2. Navigate to the directory where you cloned the project into e.g. **c:\dev\angularjs-demo**
3. Install project dependancies `npm install`

## Running the local development server

1. Run `npm start`
2. Open the the local development server in your browser `http://localhost:8000`

## My Approach

I completed the demo app by doing the following:

* Scaffolding out a basic angularjs app using [Angular Seed](https://github.com/angular/angular-seed) 
* Created a **crimesList** component, initially using dummy data rather than the provided json file (just to create the initial module and component layout)
* Created a template file for the **crimesList** component to reduce the filesize of the component going forward and to seperate presentation logic from business logic.
* Added filtering and pagination. For the pagination I made use of the [AngularUtils Pagination Directive](https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination)
* Refactored the category filter to use select dropdowns rather than input text element.
* Moved filters data to the controller rather than in the view, so this could be dynamically created later, possibly in a separate component.
* Added another component to the app called **appHeader** to demonstrate how I would go about structuring a site that uses multiple components.

## Issues

* I had an issue with the month ascending / descending sorting, so completed the demo with only month and category filters in place.

## Possible Future Tasks

* Create a service to retrieve the crimes data from the json file, so this could be resused across other components in the app without duplicating effort (DRY).
* Refactor the filtering to make the sorting work correctly.
* Create routes for different pages within the app.
* Scaffold out SASS folders/files rather than using vanilla CSS.
* Create gulp or grunt tasks to handle minification, uglification, js bundling, linting and versioning.
* Improve the look an feel as it uses bootstrap which is good to get a quick front end, but looks pants.
