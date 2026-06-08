/*

? LOOPS
Other than the primary: for, while, and do-while, 
we have 2 special loops:  
1) for-of    
2) for-in

They help us to iterate on some special data types.

? 1) FOR-OF LOOP

-> It helps us to use for loop on arrays, and strings.

*-> If we want to perform looping operation on each character of the string/array, then we use for-of loop.

-> Through this, we can fetch the value of each character.


//*Syntax:
for(let <var> of <String/Array var>){
    ______    
}
*/

// Example: 1
let str = "Apna College";

for(let i of str){
    console.log("i:", i)
}

// Example: 2
const arr = [1,2,3,4,5]
for(const i of arr){
    console.log(i);
}

// Example: 3

const greetings = "Hello World"

for(const greet of greetings){
    console.log(greet);
}
/*
When we make this loop, then we don't need to initialize anything. 
We neither see initialization, updation, or the stopping condition.
Everything happens automatically.
________________________________________________________________________________________________________________
? 2) FOR-IN LOOP
-> By using this loop, we can obtain the KEY of our object.
-> We can use it for : Objects and Arrays

* Syntax:
for(let key in <Object variable>){
    _____
}

Eg:
*/
const profile = {
    userName : "shradhakhapra" ,
    isFollow: false,
    posts : 195,
    followers : 569000,
    following : 4,
    about : "Apna College",
};

for(let i in student){
    console.log(i);
}

// For-in loop doesn't work on Arrays. We can use it on Objects, but not Arrays.
// For-of loop can be applied on both arrays and objects.