/*
* CONTROL FLOW / LOGIC FLOW 
Always entire code should not be ran.
Instead, the code should run on conditional-based.
There should be a specific code for every action.

* IF-ELSE STATEMENT

~ SYNTAX: 
if(<condition>){
    _____
}
else{
    _____
}

~ Implicit Scope
We can also write without using the curly braces as:
if(condition) ___ ;

we can even write it on multiple lines, using commas 
if(condition) ____ , ____;
*/

const fruit = "Mango";

switch(fruit){
    case "Orange":
        console.log(`Fruit is Orange`);
        break;

    case "Mango":
        console.log(`Fruit is Mango`);
        break;

    default:
        console.log("No fruit found :(");
}

// We can even write Switch Case in just 1 line all-together 
const month = 3

switch(month){
    case 1: console.log("Jan")
    break;

    case 2: console.log("Feb")
    break;

    case 3: console.log("March")
    break;

    case 4: console.log("April")
    break;

    default: console.log("May");
}

// If Default is not added, then it will execute the entire code starting from itself till bottom, except for default.


// TRUTHY / FALSY

const userEmail = "pranavmahajan123@gmail.com"   //  if it was ""  or [], then it would come false
if(userEmail){
    console.log("Email Exists")
}
else{
    console.log("Email doesn't exist");
}

/*
Empty String   " "  --> False 
Empty Array    []   --> False

FALSY VALUE
- false
- 0 
- -0
- BigInt 0n
- null
- undefined
- NaN

TRUTHY VALUES
- "0"
- 'false'
- " " --> empty string
- []  --> empty array
- {}  --> empty object
- function(){}
*/

// There is a way through which we can check whether an array is empty or not:
if(userEmail.length === 0){
    console.log("Array is empty")
}

// To check if Object is Empty:
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){  // By doing this, we get an array of keys.
    console.log("Object is empty");
}

/*
* Knowledge Fact:

When we run this on our browser's console, then we get these as output:
false == 0   --> true
false == ''  --> true
- == ''      --> true
________________________________________________________________________________________________________________
* Nullish Coalecing Operator (??)

We will be focused mainly on 2 keywords: null and undefined

The reason why we use this is because sometimes we can get 2 values when we are fetching information from the database (like firebase), then there's a chance that out of those 2 values, any of it could be null or undefined.

This operator does Type-Safety Check.

It avoids null and undefined.

If suppose we are given choice among some, then we choose the first non-null/defined value.

Eg: val1 = null ?? 23 ?? 33  --> 23
________________________________________________________________________________________________________________

* Ternary Operator

& Syntax: condition ? true : false
*/
const teaPrice = 60
teaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80");