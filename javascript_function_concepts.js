
/*
 function statement or declaration 
function x(){

}
*/

/*
 function expression 
var y=function (){

}
*/

/*
Anonymous function-> function without name and used only as values
function (){

}
*/

/*
FIRST class function-> 
A programming language is said to have First-class functions when functions in that language are treated 
like any other variable. For example, in such a language, a function can be passed as an 
argument to other functions, can be returned by another function and can be assigned as a value 
to a variable
*/

/*
named function expression

var b=function xyz(){
    console.log("hello");
}
b();//no error
xyz()//error

*/

/*
summary:
Function statement / Function Declaration : the function is normally defined and can be used later on
Function expression : the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError"

Anonymous function : function where there is no need to define name for the function, it just can be assigned to variable

Named function : Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)

first class Functions / first class citizens : 
1) used as values
2) can be passed as argument
3) can be executed inside a closured function
4) can be taken as return
*/
/*
callback functions
*/

//Q. Count number of times button is clicked
console.log("Namaste")
function attachEventListener() {
    let count = 0
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked", ++count);
    })
}
attachEventListener();

console.log("Bye")

/*
Event Loop
The job of event loop is it continuous watch the call stack to check weather it is empty 
as soon as it founds empty call stack it popped the micro task call back from micro task queue 
and pushed to call stack for execution. once the micro task queue gets empty 
then it starts popped call back from the macro task queue/callback queue and pushed the call back 
to the  call stack for further execution.




1. When does the event loop actually start? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. 
2.  Are only asynchronous web API callbacks are registered in the web API environment? - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
No, there are trust issues with setTimeout(). The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.  It's a very beautiful concept, and I've covered this in detail in the next episode of Namaste JavaScript. 

points to cover:
i) Promises
ii) Mutation observers
iii) Starvation of callback queue.
*/

/*
Higher Order Function
A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

*/


