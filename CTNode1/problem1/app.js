// the solution given is using the fs module to read 2 files that already exist and have text in them and then also creating a new file using the writeFileSync method
// it will print the first and second file to the console and then create another file stating the result of the first and second file.


const {readFileSync, writeFileSync} = require('fs'); // initialize the fs module by requiring fs and storing it as a variable using const
// initializing fs allows us to return an object that has lots of functions that can be utilized throughout our code.
// readFileSync is a synchronous API that returns the contents of the path.
//writeFileSync is a synchronous API that allows you to create and write files. It takes on 3 parameters, the file name or descriptor, the data you want to write to the file, and then you have the options to input a string or object that can be used to specify 3 additional optional parameters



const fs = require('fs');


const first = readFileSync('./content/first.txt','utf8') //reading a file called ./content/first.txt and returning the data
const second = readFileSync('./content/second.txt','utf8') //reading a file called ./content/second.txt and returning the data
// utf8 is the defaut encoding for strings and is needed. if its not used then we get a buffer back.


console.log(first, second); //printing the contents of the file that have been logged as variables first and second


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`); //writefilesync is used to create a new file called './content/result-sync.txt' and prints the string wrapped in the template literal.


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'}); // same result is occuring here but with the additional flag: 'a';
// {flag: 'a'} specifies the file operation mode as "append" so that the data will be added to the existing content instead of replacing it.