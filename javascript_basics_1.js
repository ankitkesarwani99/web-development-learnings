/*
#Everthing in js happens inside an excution context;
#js is synchronous single threaded language.
# js runs in two phase:
1.memory creation phase
2.code execution phase

#call-stack maintains the order of execution of execution context.
*/

/*
Hoisting in js
know more: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
*/

// getName();
// console.log(getName);
// console.log(x);

// var x = 7;
// function getName() {
//     console.log("hello A&K")
// }

/*
Anything which is not inside a function, that is in global space or global object i.e.window.

window is global object in js, which is equal to this keyword.
*/

// var x=7;
// function a(){
//     var y=8;
// }
// console.log(x); 7
// console.log(y); error
// console.log(window.x);  7
// console.log(this.x) 7

/*
scope: it means where you can access specific variable or function in the code.
*/

/*
lexical environment: it's the internal js engine construct that holds identifier-variable mapping. (here identifier refers to the name of variables/functions,
    and variable is the reference to actual object [including function type object] or primitive value). A lexical environment also holds a reference to a parent lexical environment

lexical environment= local memory + lexical environment of its parent(parent means : where the function lies in the code)

scope chain: whole chain of lexical environment is scope chain
Whenever our code tries to access a variable during the function call,
it starts the searching from local variables. And if the variable is not found, it’ll continue searching in its outer scope or parent functions’ scope until it reaches the global scope and completes searching for the variable there
*/

/*
let , const,var

https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript

let and const are also hoisted.

 if you access var before it's declared, it is undefined. But if you do the same for let and const, they throw a ReferenceError.

 if I accessed the let/const variable earlier than its declaration, it would throw a ReferenceError. Because of the TDZ->Temporal Dead Zone.

 Read about TDZ: https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/


*/
/*

Block scope:

Q) What is block in JavaScript?
> multiple js statements formed in a group enclosed in brackets and it forms a block

Q) What is need of a block/Grouping?
> JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block.
*/

//this will throw  syntax error.
// let a = 10;
// var a = 100;

// this will throw reference error
// console.log(a);
// let a = 10;

// this will throw type error
// const a;
// a=10;

//this will run fine with output as undefined
// let a ;
// console.log(a);

/*********************** */

// var a = 1;

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);//10  --> here this a shadows upper a
//     console.log(b);//20
//     console.log(c);//30
// }

// console.log(a);//10 because a is in global scope
// console.log(b);//error
// console.log(c);//error

/*********************** */

// let b = 1;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);//10
//     console.log(b);//20--> here this b shadows upper b
//     console.log(c);//30
// }

// console.log(a);//10 because a is in global scope
// console.log(b);//1 because let are block scoped

/*********************** */

// const c = 1;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);//10
//     console.log(b);//20--> here this b shadows upper b
//     console.log(c);//30
// }

// console.log(a);//10 because a is in global scope
// console.log(c);// 1

/* Since let and const follow block scope, 
the below code will throw a ReferenceError saying it cannot access 'a' 
before its initialized because a will be in TDZ. The best way to understand this is by looking at those brackets {}. 
SInce a is being logged on to the console before its initialized in the {}, 
it throws an error. Thats what block scope's all about.
 */
// let a = 100;
// {
//     console.log(a);
//     // let a = 10;
// }

// let a = 100;
// {
//     console.log(a);//100--> because block also follow lexical environement concept.
// }

/*
Illegal Shadowing in JS

while shadowing a variable, it should not cross the boundary of the scope,
i.e. we can shadow var variable by let variable but cannot do the opposite.
 So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing
 and it will give the error as “variable is already defined.”
*/

// let a = 200;
// {
//  var a =20;//error
// }

//as 'var' declaration goes to 'Global environment' and sets in Memory context, it cannot be set using 'Block environment' value Hence:    Uncaught SyntaxError: Identifier 'a' has already been declared
/*
q->`let` goes to different memory called "script" and var goes to "Global". Why is it mentioned as crossing boundaries?
 ans-> ? (not sure)So basically where we went wrong is by thinking "Script" and "Global" as different memory. But actually, they are in the same memory as the execution context is the same here which is Global Execution Context. So here the "Script" and ""Global" are scopes that are in Global memory.
 */

// var a = 200;
// {
//  let a =20;//no-error
// }

// let a = 200;
// function x(){
//  var a =20;//no-error
// }

// function func() {
//     var a = 'Geeks';
//     let b = 'Geeks';

//     if (true) {
//         let a = 'GeeksforGeeks'; // Legal Shadowing
//         // var b = 'Geeks'; // Illegal Shadowing
//         console.log(a); // It will print 'GeeksforGeeks'
//         console.log(b); // It will print error
//     }
// }
// func();

/*
scopes rule which work in simple function, in same way it also work with array function.
*/

/******************* Closures ****************/
/*

Closure :Function bundled with its lexical environment is known as a closure. 
Whenever function is returned, even if its vanished in execution context 
but still it remembers the reference it was pointing to. 
Its not just that function alone it returns but the entire closure
 and that's where it becomes interesting.



more about closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

we can return ,pass as argument and assign a function.
*/

// function z() {
//     let a = 7;
//     return function y() {
//         let b = 10;
//         return function x() {
//             console.log(a, b);
//         }
//     }
// }

// var res = z();
// console.log(res);
// console.log(res());
// res()();

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function y() {
//             console.log(i)
//         },
//             i * 1000);
//     }
// }
// x();//output-> 6 6 6 6 6 // because it referece to i not to its value.

function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function y() {
      console.log(i);
    }, i * 1000);
  }
}
y(); //output-> 1 2 3 4 5 --> since i is in block scope, and in each iteration we will have new copy of i.

// function z() {

//     for (var i = 1; i <= 5; i++) {
//         function close(x){
//         setTimeout(function y() {
//             console.log(x)
//         },
//             x * 1000);
//     }
//     close(i);
//     }
// }
// z();//output-> 1 2 3 4 5
