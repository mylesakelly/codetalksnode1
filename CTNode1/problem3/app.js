// the goal of this function is to make a request to the http server, use an event listener for readystatechange. Next it will use an if else statement
// to state if the request was received or not and then use the GET mthod to request data from the url and then send the data to the server

const getTodos = () => { //declared function getTodos
    const request = new XMLHttpRequest(); //an instance is made for the object XMLHttpRequest to make a request to the http server
   
   
   request.addEventListener('readystatechange', ()=>{ //an addEventListner is added to listen for the readystatechange which fires when the state of the request changes
   
   
    if(request.readyState === 4 && request.status ===200){
      console.log(request.responseText)
       }
      else if (request.readyState === 4){
        console.log('could not fetch the data');
      }
   }); // using a conditional statement to say if the request.readystate is equal to 4 and the resuest.status is equal to 200 then the console will print the responsetext
   // if the request.readystate only equals 4 then the console will print "could not fetch the data"
   
   
   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //sets the http method as GET and specifies what url to request the data from
   request.send(); //the request is sent to the server
   } 

   
   
   
   
   getTodos(); //the function is called 
   getTodos(); //the function is called for a second time