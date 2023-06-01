// This solution is used to validate if the required fields of the signup and login have been filled our correctly by the user and 
// if it has then the user can log in with their username and password

// Assume that you have already installed ran npm install body-parser and ​npm install express-validator cors 

//validation.js
const { check } = require('express-validator');
// initializing the express-validator module and making it required in the code.
exports.signupValidation = [ 
   check('name', 'Name is required').not().isEmpty(), //validate that the name field is not empty and state that it is required
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }), //validate if the email is a valid email 
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 }) //validate if the email is valid and is a minimum of 6 characters
]

exports.loginValidation = [ //code to validate if the login is valid
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }), //requires the email field is filled out and a valid email is entered
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 }) // requires that the password field is completed and the characters are more a minimum of 6 characters
]



//server.js
const createError = require('http-errors'); // requiring http-errors module in the code
const express = require('express'); // requiring the express module in the code
const path = require('path'); // requiring the path module in the code
const bodyParser = require('body-parser'); // requiring the body-parser module in the code
const cors = require('cors'); // requiring the cors module in the code
const { signupValidation, loginValidation } = require('./validation.js'); // importing the ./validation.js in the code and creating the variables signupValidation and loginValidation
const app = express(); // create an instance of the express application
app.use(express.json());  // this is used to parse JSON data
app.use(bodyParser.json()); // this code is used to parse request bodies
app.use(bodyParser.urlencoded({ 
   extended: true
}));
app.use(cors()); //this code allows requests from multiple domains

app.get('/', (req, res) => { 
    res.send('Node js file upload rest apis');
 });
 // this code defines a GET route to whatever URL is being accessed and then the server responds "node js file upload rest apis" once accessed
 app.post('/register', signupValidation, (req, res, next) => {
    // POST request is made to the url with all the conditions identified for signupValidation
   // your registration code
 });
 app.post('/login', loginValidation, (req, res, next) => {
    // POST request is made to the url with all the conditions identifed for loginValidation
   // your login code
 });
 // Handling Errors
 app.use((err, req, res, next) => {
    // console.log(err);
    
    err.statusCode = err.statusCode || 500; // create the variable err.statusCode and giving it the value of err.statusCode or 500
    err.message = err.message || "Internal Server Error"; // create variable err.message and giving it the value err.message OR the string "internal server error"
    res.status(err.statusCode).json({ // this line will set the http response code to the errors status code value of status code and then a JSON response should be sent to the user
        //the user should be able to get info about the error that was received
      message: err.message,
    });
 });
 app.listen(3000,() => console.log('Server is running on port 3000')); // sets the server to be listned to on port 3000. We use this instead of Go Live.