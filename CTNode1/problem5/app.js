// What is happening in the code below? Why is this important? What would you use mySQL for?  Can you give an example?  

// Assume that you have already installed ran npm install mysql


// SQL is a language for storing and manipulating databases
// SQL can be used for executing queries against a database, retrieve data from a database, insert records in a database, updating records and a lot more

var mysql=require('mysql'); //this line is requiring mysql in the code
var connection=mysql.createConnection({  //function is used to establish a connection to the mysql database and the creates an object with the properties and values below
  host:'localhost',
  user:'your username',
  password:'your password',
  database:'your database name'
});

connection.connect(function(error){ // this line is making a function to catch any errors
  if(!!error){
    console.log(error);
}else{
  console.log('Connected!:)');
}
}); 

// the conditional statement is saying if there is an error, console.log error; if there is no error console log: connected! :)
module.exports = connection; 
// this line exports the connection module so that it can be used in other modules and it can be used to access the mySql database.