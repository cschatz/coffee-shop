
const express = require('express')
const fs = require("fs/promises");
const path = require("path");
const bcrypt = require ('bcryptjs');
const { Client } = require("pg");


// const config = require('./config.js'); // internal module for connecting to our config file, this would
//                                        // normally be in our .gitignore file

// const client = new Client(config);


const app = express();

// This code is for routing and serving the 'static' code on the frontend.
// This is usually not included in the backend, but this streamlines the process
// so that you can focus on the backend part of the application.
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
 extended: true
}));


// Helper Function
async function findUser(email) {
 console.log(email)
 await client.connect();
 let text = `SELECT * FROM user_table WHERE user_id = $1`;
 let value = [email];


 let getUser = await client.query(text, value);
 await client.end();
 return getUser.rows;
}




// ADD THE REST OF THE ENDPOINTS HERE


// Login functionality


app.post("/auth/login", (req, res) => { 
  //app.post is used to handle incoming POST requests.  A POST request is used when we want
 //to submit data to the server


   const user = findUser(req.body.email);
   //findUser is retrieving username from database to compare to what the user has entered (which is   
  //user.name).  Note that user.password is the password the user enters.


   if (user.length > 0) {
       // user exists, check password


       if (bcrypt.compareSync(req.body.password, user.password)) {
           //user name matches
           res.send({ok: true, email: user.email, name: user.name});
       } else {
           // user name does not match
           res.send({ok: false, message: 'Data is invalid'});           
       }
   } else {
       // user doesn't exist at all
       res.send({ok: false, message: 'Data is invalid'});
   }
});


// Registration
app.post("/auth/register", async (req, res) => { 
   var salt = bcrypt.genSaltSync(10);
   var hash = bcrypt.hashSync(req.body.password, salt);
   // const userFound = findUser(req.body.email);  //checking for the email in the database and     
                                                                           // assigning to userFound

    res.send({ok: false, message: "Database is not ready."});       
                                                                           
//    if (userFound.length > 0) {
//        // User already registered
//        res.send({ok: false, message: 'User already exists'});
//    } else {
//        // New User needs to register (did not already exist as a registered user)
//        await client.connect();   //access database
//        // Begin the process of adding data to database
//        // The table name is VALUES and each entry has three fields,
//        // req.body.name (username), req.body.email (user email), hash (hash of the password)
//        let text = `INSERT INTO user_table VALUES($1, $2, $3)`;
//        // value is an actual entry
//        let value = [req.body.name, req.body.email, hash];
//        let addUser = await client.query(text, value);
//        console.log(addUser);
//        await client.end();
//        res.send({ok: true});
//    }
});












// This is for the frontend
app.get("*", (req, res) => {
 res.sendFile(__dirname + "public/index.html");
});


app.listen('5050', () => {
 console.log(`App listening on port 5050`)
});
