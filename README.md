# _Dope Kegz_

_created: 11 November 2020 last updated: 4 December 2020_

#### _Application that will allow a user to track keg invnetory_

#### By _**Donny Mays**_

## Setup/Installation Requirements
- In terminal/command line, navigate into the directory where you would like to create a new React project.
- Clone this project using the 'git clone https://github.com/donnymays/dope-kegz.git' command in terminal/command line while in the desired directory.
- Open the project and run 'npm install' in your command line to download dependencies.
- Run npm run start to start a server and view the project in a browser.


## Description
_This project was refactored to use Redux for week 3 independent project_

_This is a project for Week 2 of the React block of Epicodus.  Prompt can be seen below._

_The original instructions for the assignment include:_
This will be a two-week project. Spend today building a tap room in React where a bar or kombucha store can track their kegs. This could also be a soda fountain or another kind of tracker - as long as you're able to track the remaining amount and meet the objectives, you can be creative with this prompt.

Before getting started, plan out your application and draw a component tree or component diagram that shows the structure of your components. This is a requirement for the project and should be included in your README. You may draw the structure on a piece of paper and take a picture of it or use an application like https://www.draw.io/.

Here are some user stories to get you started. The application should have the following functionality:

As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
As a user, I want to submit a form to add a new keg to a list.
As a user, I want to be able to click on a keg to see its detail page.
As a user, I want to see how many pints are left in a keg. Hint: A full keg has roughly 124 pints.
As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.
Further Exploration
If you have time remaining after you complete the required objectives, work on the following user stories:

As a user, I want the option to edit a keg's properties after entering them just in case I make a mistake.
As a user, I want to be able to delete a keg.
As a user, I want a keg to update to say "Out of Stock" once it's empty.
As a user, I want kegs with less than 10 pints to include a message that says "Almost Empty" so I can try a pint before it's gone!
As a user, I want to have kegs prices to be color-coded for easy readability. This could be based on their price, the style of beer or kombucha, or the amount of pints left.
As a user, I want this application to be nicely styled. (Use stylesheets and CSS objects!)


## Planning
<img src="./public/dope-kegz-planning.png">


## Specifications
| Spec     | Story | Action    |
| -------- | -------- | -------- |
| 1 | As a user I want to see a list of all available kegs. | Read functionality for kegs |
| 2 | As a user, I want to submit a form to add a new keg to a list. | Create functionality for kegs |
| 3 | As a user, I want to be able to click on a keg to see its detail page. | Read Functionality for individual kegs |
| 4 | As a user, I want to click a button whenever I sell a pint from a certain keg. | Method to update a keg object's property for amount left |


## Known Bugs
_There are no known bugs at this time_

## Technologies Used
* React
* HTML
* CSS
* NPM
* Webpack

### License
Copyright (c) 2020 **_Donny Mays_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.