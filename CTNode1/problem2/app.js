// what is async programming?
// Asynchronous is a non-blocking architecture, which means it doesn’t block further execution 
// while one or more operations are in progress.

// what is sync programming?
// a single-thread model, it follows a strict set of sequences, 
// which means that operations are performed one at a time, in perfect order. 


// the goal of this solution is to read the first and second files using the readFile function available in the fs module
// The solution will also return an error if no result is received when the readFile function is called and attempts to read the file
// finally the writeFile function creates a new file stating the result "Here is  the result: ${first}, ${second}" and will return an error if no result from the first and second readFile functions is given.

const { readFile, writeFile } = require('fs'); // initializing the functions readFile and WriteFile that are available in the fs module
// this line is using object destructuring to assign the readFile and writeFile functions to variables with the same name.
console.log('start'); // prints start to the console

readFile('./content/first.txt', 'utf8', (err, result) => { //using the readFile method to read the file ./content/first.txt. Utf8 is needed so that buffer is not returned.
    // a callback function is initialized with the parameters err and result.
    if (err) { 
        console.log(err);
        return;
    }
    // if an error is received the console will log the error
    const first = result; 
    console.log(result);
    // the variable first is given the variable result and then result is printed to the console
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(result);

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with the task');
        // writeFile method is used to create a new file and has the parameter of a string, and a function that has the parameters of err and result. 
        // if an error is found it will be logged to the console if not the program will log "done with the task"
        });
    });
});
