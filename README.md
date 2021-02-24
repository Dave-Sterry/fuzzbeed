<div align="center">

# Survey

## Two-Day Project with Epicodus School Working with Firestore, React, and Redux

### By Zahnen GarnNameer, David Sterry, & Danielle Thompson

### Project began 2.22.21. Last updated 2.23.21.

</div>

---

### Get in Touch

danithompson74 at gmail.com | [LinkedIn](https://www.linkedin.com/in/danielle-thompson74/)
zahnen at gmail.com | [LinkedIn](https://www.linkedin.com/in/zahnen/)
sterry.david at gmail.com | [LinkedIn](https://www.linkedin.com/in/david-sterry-developer/)


### Known Bugs

_No known bugs at this time._

[Report bugs here.](https://github.com/Zahnen/fuzzbeed/issues) | [Request features here.](https://github.com/Zahnen/fuzzbeed/issues)

___

## Description

TODO

### Objectives

{complete}
- CRUD functionality for a survey {plan - split of CRUD fxnality Mon PM} {done}
--> user should be able to create, update, and delete a survey.{done}
- {**Mon priority**} All surveys stored in the Firestore database. {done}
- {**Mon priority**} Surveys should be submitted to database.{done}
- {**Tues PM priority**} User should be able to sign up, sign in, and sign out.{done}
- {**(First Up)**} Tidy / Send Current OAuth stuff to separate branch. {done}
- {**Wed**} Get the bootstrap.js CDN/bundled file in package working for navbar menu button to work. {done}

---
{TODO}
- {**Wed AM Conditionals for Sign In/SignOut Components**}
--> NavBar
--> Page itself
--> Alerts {done}
--> Making redirects happen on sign in --> dashboard/sign up --> sign in/sign out --> "Goodbye!"
- {**Wed**} Make real surveys, not help queue.
--> Survey Create {short answer only}:
--> textbox for Q with short answer textbox answers (1)
--> Answer choices with textboxes (4)
- {**Wed**} User should be able to fill out and submit surveys.
--> "TakeSurvey.js" page:
- Link from survey details to chosen survey
- user should answer T/F to all questions
- on submit, shows their results (even if results are just their answers - "You're a walrus!")

---
- {**Thurs AM**} Host on Firebase.
- {**Wed PM/Thurs AM stretch?**} User should have their own dashboard which lists surveys created. [see dis](https://firebase.google.com/docs/auth/web/manage-users#get_a_users_profile) [and dis](https://developers.google.com/identity/sign-in/web/sign-in#get_profile_information)
- {**ongoing UPDATE**} README

<div align="center">

## Component Diagram

![Tap Room File Tree](https://i.postimg.cc/BnXjV00P/Tap-Room-File-Tree.png)

</div>

---

## User Stories

|  # 	|  Stories 	|
|---	|---	|
|  1 	|  A user should be able to create, update and delete a survey. All surveys should be stored in the database. 	|
|  2 	|   A user should be able to fill out and submit surveys. Survey results should be submitted to the database. 	|
|  3 	|   A user should be able to sign up, sign in, and sign out.	|
|  4 	|   A user should have their own dashboard which lists the surveys they've created.	|
|  5 	|   {Stretch} A user should be able to see the combined data on a survey in their dashboard. For instance, if a survey provides a 1-5 rating, return an average rating for all surveys.	|


---

## Stretch Goals

- Implement more CSS/CSS objects
- {stretch} Try to add broken test back in (eh?)
- {stretch} dropdown for type of Q (T/F (easiest implementation), textbox, multiple choice, dropdown, contact info, date/time, etc)
- {stretch} User should be able to see combined data on a survey in their dashboard. E.g. an average rating.
- {stretch} Use a library like D3 to visualize data from surveys.
- {stretch} Make a component diagram.


## Technologies Used

- [VS Code](https://code.visualstudio.com/download)
- Git & GitHub
- ES6 JavaScript
- JSX
- React Framework v17.0
- Redux v4.0.5
- Firebase v.7.8.0
- Firestore
- React-Router-Dom v.5.1.2
- Firebase Authentication & Authorization
- Firestore
- react-alert v7.0.2
- FirebaseUI-web-react v.4.0.0
- react-use-auth v.2.1.0-14
- npm
- node.js
- `create-react-app`
- `npm install --save-exact react-scripts@3.2.0`
- `npm install redux@4.0.5 react-redux@7.1.3`
- `npm install react-redux-firebase@3.1.1 redux-firestore@0.12.0`
- webpack v5.11.1
- Babel
- ESLint
- node.js v15.8.0
- Bootstrap v5.0.0
- [Unsplash](unsplash.com)

___

### Setup/Installation Requirements

- To access the live page visit ... TODO

##### Running the Project Locally

###### For Mac Users

- Access Terminal in your Finder, and open a new window. Install the package manager, [Homebrew](https://brew.sh/), on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`.
- Ensure Homebrew packages are run with this line of code: `echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`.
- Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`.
- Now, install Node.js through Homebrew with the following command: `brew install node`.
- Confirm that node and npm (Node's package manager that is automatically installed alongside Node) are on your working system with two command lines `node -v` & `npm -v`, respectively returning something resembling `v14.5.0` & `6.14.5` (or higher).

###### For Windows Users

- Open a new Command Prompt window by typing "Cmd" in your computer's search bar.
- Determine whether you have 32-bit or 64-bit Windows by following these [instructions](https://support.microsoft.com/en-us/help/13443/windows-which-version-am-i-running).
- Go to [Git Bash](https://gitforwindows.org/), click on the "Download" button, and download the corresponding exe file from the Git for Windows site._
- Follow the instructions in the set up menu.

###### For Both Mac & Windows systems

* Once you have Git installed on your computer, go to this [GitHub repository](https://github.com/Zahnen/fuzzbeed), click the "Fork" button in the upper right hand corner of the page, and clone this application with the following command:`git clone https://github.com/Zahnen/fuzzbeed.git`.
* Go to the [Node.js website](https://nodejs.org/en/download/) and download the appropriate source code for your Windows operating system.
* Once the project has been cloned to your computer and you have all the necessary items on your local computer, open the project in the application of your choice.

##### Available Scripts

In the project directory, you can run:

###### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

###### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

___

<div align="center">

#### Legal, or License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2021 *_Zahnen Garner, David Sterry, & Danielle Thompson_*

</div>