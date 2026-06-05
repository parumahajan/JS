//* IIFE (Immediately Invoked Function Expressions)

/*
We do this when we want our function to execute immediately.

& 2 Reasons:
There are times, where there's a file which contains code for Database connection.
We want the moment our application starts, it establishes the database connection.

There are some variables declared under Global Scope, and we don't want those variables to cause any trouble within our function. 

So, in order to avoid the pollution from Global Scope, we want to execute them immediately.

Hence, we write IIFE to solve this problem.

Syntax: (<Fn>) ();

We enclose the entire function within parenthesis, and then add another parenthesis, in front of it for execution.

~ Example:   (NAMED IFFE)
(function user(){
    console.log(`DB Connected`)
})();

* But here, there's a catch.
If we do it again, or repeatedly, then it would throw an error, since it won't know where to stop the context.
So, in order to resolve it, we add a ";" at the end of the parenthesis.
*/

// * Using Arrow Function

// SIMPLE IFFE (with variable)
( (name) => {
    console.log(`DB Connected to ${name}`)
}) 
('Pranav')   // calling the function