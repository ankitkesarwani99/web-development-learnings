
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

console.log("Namaste")

document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked")
})

console.log("Bye")