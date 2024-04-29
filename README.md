# Coffee Shop Authentication App

Learning about Custom Authentication: How to create a login, signup, and recover password.

## Instructions:

## Step 1: Set up your project
- Clone Repo
- Run `npm install`
- What is this doing?
- Run `npm start`
- What is this doing?

## Step 2: Explore the App
Look at the folder structure, what do you see?
Let’s explore the public folder. This is all of the frontend code. Let’s look at the HTML file first. This explore the following files:
- Router.js
- App.js
- API.js
- Auth.js → This is where all of the logic will go for logging in our users and displaying the correct pages. No need to update this now. 


What do you notice? What is unfamiliar?

There are a lot of things we could do to improve the form accessibility and usability, but we won’t be covering that in this class.

## Step 3: Let’s look at the Server
What is the existing code doing?

## Step 4: Create a database to store the user credentials
- This can be done in the local database you have already created in PGAdmin or in the database you created in AWS. [Here are the instructions for AWS](https://docs.google.com/document/d/1UQKewq6z8ADVulda8TxCkpgptLHAPdGc_y4-bez5c3o/edit?usp=sharing)
- Create the table you will need for storing the username and password.
- Be sure to install `node-pg` in order to write your SQL queries and connect to your DB.

## Step 5: Let’s look at the bcrypt documentation
https://www.npmjs.com/package/bcrypt
- How do you add bcrypt to your project?
- What methods does bcrypt use?

## Step 6: Let’s add routes and helper functions
- How should we create the `/login` and `/register` functions for our API?
- What helper functions might we use? How would you check to make sure a user doesn't already have an account before adding them to the database?
- How would you create a hashed password with bcrypt and store in the database?

## Step 7: Testing
- Be sure to test your final product, both in Postman and from running the app on the frontend!

