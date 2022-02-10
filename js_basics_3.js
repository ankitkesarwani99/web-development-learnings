/*
String Basics
*/

// let msg = 'hello';
// console.log(msg.toUpperCase());
// console.log(msg);

/*
Double equals (==) is a comparison operator, which transforms the operands having the same type before comparison.
So, when you compare string with a number, JavaScript converts any string to a number. An empty string is always converts to zero. A string with no numeric value is converts to NaN (Not a Number), which returns false.


=== (Triple equals) is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type. 
This operator performs type casting for equality. If we compare 2 with “2” using ===, then it will return a false value.
*/

/*
Falsy Values:
1.false
2.0
3.""
4.null
5.undefined
6.NaN

Except above 6 everything is truthy;
*/

/*
Array Methods
push--> add to end
pop--> remove from end

shift--> remove from start/front
unshift--> add to start
*/

/*
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:
*/

const todo = []
while (true) {
    let str = prompt("What do you want me to do")
    if (str === 'new') {
        let newTask = prompt("Enter the new TODO task");
        todo.push(newTask);
    } else if (str == 'delete') {
        let deleteTaskIndex = parseInt(prompt("which task you want to remove"));
        todo.splice(deleteTaskIndex, 1);
    } else if (str === 'list') {
        todo.map((x) => console.log(x));
    } else if (str === "quit") {
        break;
    }
}