/*                 
2:10
* JAVASCRIPT 

We can directly write and run our JS code on our console of any website (using Inspect).

Ctrl + k -> Clears the console
__________________________________________________________________________________________
? ALERTS 
-> Popups
Eg:  alert("Apna College");

This way of writing can only be done on browser, not on VS Code (as it uses Node.js)

? PROMPTS
-> Alerts along with taking an input
Eg: prompt("hello!");

-> We can store that input in some variable.

Eg:  
let Name = prompt("Enter your Name");
console.log(Name);
__________________________________________________________________________________________
! CHATPER 1 - VARIABLES AND DATATYPES

? console.log()
-> used to log (print) a message on the console.
Eg: console.log("Apna College");

*(we can write it both in ' ' or " ")

! TO PRINT ALL TOGETHER -> console.table( [] )
Eg: console.table( [name, rollNo] )

This print the values in form of a table.

! Another way
? node <file_name>
We can write this in the terminal, which also do the same thing as producing the output.

# In order to connect js code to the website (browser), we'll create an HTML file, and connect it with our js file.

In this way, we will establish an Indirect connection between JS file and the browser.
__________________________________________________________________________________________
? VARIABLES
-> These are the containers which store data.

Here, we don't need to specify the datatype for initializing/declaring variable.

We can directly write it as it is, and the compiler would automatically interpret according to the value provided to it.

* This is because JS is a Dynamically typed language.
(type of variable will automatically be declared at runtime, based on the value assigned to it.)

^ NULL
-> We know what's inside it (Empty value)

^ UNDEFINED
-> It exists, but we don't know what's inside it.

^ NOT DEFINED
-> It doesn't exist at all.
__________________________________________________________________________________________
? RULES FOR VARIABLES:

1) Case-sensitive ('a' and 'A' are different)
2) Only letters, digits, _ ,and $ are allowed. (the only special characters are: dollar and underscore)
3) 1st character can never be a digit.
4) Reserved keywords should not be kept as variable names.

*We can declare variable even without writing "var/let/const". It will work, but it is not preferred. 

* Whether we use ";" or not, its our choice. It's not mandatory to use.

* If we declare a variable, but not give it a value, then it becomes undefined.

There are other primary ways to define variables using keywords:

? 1) var
*-> It can both be re-declared and updated.
*-> Scope: Global (can be used anywhere in the code)
-> Functional scope

(Scope is nothing but these curly braces)

-> var itself adds itself to the window object.

-> It is an old way of declaring variables. (ES5) ECHMA SCRIPT

-> It's not considered a good practice to use 'var' for declaring variables.

& -> Here, re-declaration was a problem.
-> It was used till 2015. But since new regulation (ES6) came, so it was no longer used after it.

-> (Since, variables can be re-declared, so the same variable name can be declared multiple times).

*Eg: 
var Name = "Pranav";
var Name = "Paru";

? 2) let  
*-> Variable cannot be re-declared, but can be updated.
*-> Scope: Block (within curly braces {})
-> Brace Scope

-> During initialization, even if we don't assign a value to it, it will still work (tho printing it will print undefined)

*Example:
let name = "Pranav";
name = "Paru";
(instead of initializing/declaring it again, we can directly update its value)

If we write the same things within curly braces, then its possible.

{
    let Name = "Pranav";
    console.log(Name);        
}

(This is possible by creating different blocks - BLOCK SCOPE)

{
    let Name = "Paru"
    console.log(Name)
}

? 3) const
*-> Variable can neither be re-declared nor be updated. (It's fixed!)

*-> Scope : Block

-> Once its declared, its value is fixed, and cannot be changed.

-> During initialization, if we don't assign a value to it, then we'll get an error.

-> We can use it to fix constants like PI, AREA (formula).

Eg: const PI = 3.14;

& let and const are a new way of declaring variables, which come under ES6. (Modern JS)
________________________________________________________________________________________________________________
? FUNCTIONS 
We use them in order to use the code, and to call it whenever we need. (We can run functions with different parameters - values)

The parameters which we send while calling a function are known as "Arguments". It is the real value, we pass.

Whereas, Parameters inside a fn store the value of those Arguments.

! IMPORTANT
When we declare a variable inside a function, then its defined as functional scope.

That is, even if a variable is declared within a loop present within a fn, we can still use it throghout our fn.
________________________________________________________________________________________________________________
? DATA TYPES 

* 1) PRIMITIVE (7)
1) Number (includes -> int, float, double etc.)
2) String 
3) Boolean (T,F)
4) Null (standalone value)
5) Undefined (no value is assigned yet)
6) Bigint (output ends with 'n')
7) Symbol (used mainly for uniqueness for componenets, especially in React, Figma)

* Note: 
- JS is a Dynamically-typed language. We don't need to declare variable types explicitly.

- If we don't specify the value of a variable after declaring it, then it returns undefined.

* SYMBOL
We use Symbol, when we want to make a variable (like id) Unique.

const id = Symbol("123")
const anotherId = Symbol("123")

Both their values passed inside parameters is same, but their values returned are different.

* BIG INT
const bigNumber = 123456789n (n lagane se apne aap bigInt bn jaega)
________________________________________________________________________________________________________________
* TYPEOF
To know the typw of a variable, we use "typeof".
console.log(typeof ___)

# when we check the type of null. then it comes to be "object".
# and of undefined, its undefined
________________________________________________________________________________________________________________
* TYPE CONVERSION
let age = "18"                         (We initially saved it as String)
console.log(Number(age))               (We converted it into Number datatype)

If that string was invalid like "18abc", and we tried to explicitly convert it into number, then it would convert the type into Number, but the value will be returned as NaN (Not a Number).

String -> Number = Nan (if mixed)
undef  -> Number = Nan
null   -> Number = 0
false  -> Number = 0
true   -> Number = 1  

let checkIfTrue = 1
console.log(Boolean(checkIfTrue))  -> true (O/P)
________________________________________________________________________________________________________________
* OPERATIONS 

(+ - / * % ) -> except for these, there's a main important thing

^ If we write:
console.log("1" + 2 + 2) --> 122
console.log(1 + 2 + "2") --> 32

It takes that number as string

* HIDDEN FACTS
console.log(+true) --> 1
console.log("") --> 0
console.log(2 > 1 ) --> true
console.log("2" > 1) --> true
console.log("02" > 1) --> true

* THERE ARE SOME CONVERSIONS, WHICH CAN END US IN CONFUSION.
console.log(null) --> null

console.log(null > 0) --> false
console.log(null < 0) --> false
console.log(null == 0 ) --> false

* But, when we do this, then we see null is both greater and smaller than 0.
& This occurs due to "Value Conversion".
console.log(null >= 0 ) --> true
console.log(null <= 0 ) --> true

Another reason for this is, that the working of Equality operator "==" and Comparison operatiors like ">", "<", ">=", "<=" is different in JavaScript.

This also indicates an Inconsistency in the JavaScript language, as sometimes it converts null into 0, and sometimes into NaN.

* STRICT-CHECK
This equality operator checks the datatype too, along with the value.

console.log(2 == 2 ) --> true
console.log("2" === 2 ) --> false
________________________________________________________________________________________________________________
* REFERENCE -> BRACKET (Non-Primitive)   
* PRIMITIVE -> NO-BRACKET 

* REFERENCE -> (), []. {}      
& [] -> used for arrays

Here, We can't directly copy the values, which are present inside these brackets. Instead, we pass a Reference.

Reference is any value, whose real value isn't passed on copying, and only reference is passed.So, if any change is made in b, then a's value will also change.

~ EXAMPLE:
let a = [1,2,3,4];
let b = a;

b will have reference to a's [1,2,3,4].
________________________________________________________________________________________________________________
* 2) NON-PRIMITIVE
-> Objects (sub-categories: Arrays, Fns)

Object -> Collection of Values

We declare multiple primitive datatypes under one single variable, and we call that as an object.
In our object, key value pairs are stored.
We enclose our objects within curly braces { }
& We generally declare objects using the keyword "const".   (V. IMPPPP)
 
All non-primitive types when returned gives "Object Function" as return value.

*Eg: (Just like we write in SQL)

const student = {
    fullName : "Pranav Mahajan",
    age : 22,
    cgpa : 9.36,
    isPass : true,
};

OR     

const student = {fullName:"PranavMahajan", age:22};

If suppose, we only want something specific out of it, then we use Square Brackets [].

Eg: student["fullName"]

? There are two ways to access these keys:
1) obj.key      (when we use dot, we don't use any " ")
2) obj["key"]   (when we use [], we use " ")

*Eg:
const marks = {Maths:72, Science:80, English:85};
console.log(marks.Science);
console.log(marks["Maths"]); // DON'T GET CONFUSED

If we want to change/update any of the value, then we use:
obj.

If we use 'const' keyword, then we cannot make changes in case of a variable.
But when it comes to object's keys, that we can change.

The reason behind it is, that while we change one of the key's value of an object, the entire object's collection doesn't entirely change (its address remains the same), and thus it kind of remains constant, that's why error doesn't come, when we try to change the value of an object's key.
________________________________________________________________________________________________________________
? TYPES OF MEMORIES

1) Stack  -> used in Primitive Data Types
2) Heap   -> used in Non-Primitive Data Types

* 1) Stack
We get a copy of the variable declared.
Original value doesn't changes.

* 2) Heap
We get the reference from here (Original Value).
Original value changes here (if reference is changed)

Here, we'll take an example now:

let ytName = "Chai Aur Code"
let anotherName = ytName
anotherName = "Hitesh Choudhary"

console.log(anotherName)
console.log(ytName)

Here, when we change the value of "anotherName", then the original value doesn't changes as it is passed as Reference.
________________________________________________________________________________________________________________
? STRINGS

Strings are unique/special in javascript.

Anything we try to add with a string, it gets attached.
(if we try to add string with a number, then that no. gets converted to a string, and then it gets added )

~ Eg: (Using Traditional Way)
console.log("123" + 1)    => 1231
console.log("abc" + 123)  => abc123

This way of concatenation is old, and is generally not preferred.
Instead there's a modern technique for concatenation.

~ STRING INTERPOLATION (MODERN WAY)
We use Backticks ` ` in order to concatenate.
In this way, we create placeholders, and we directly inject the variables.

& Syntax:  console.log(`_____${}_____`) 

Eg: console.log(`Hello, my name is ${name}`)

* METHODS IN STRINGS
Strings are object type.
They form a key-value pair.

const getName = new String('hitesh')

console.log(getName[0]) --> h
console.log(getName.__proto__) --> {} --> This means that it returned an object (It's not empty)

We can check all these methods in detail in console log of our browser, by doing Inspect.
It will contain a list of functions, properties, and values.

* MOST USED METHODS 

str.toUpperCase()   // Convert to uppercase
str.toLowerCase()   // Convert to lowercase

str.charAt()        // Get character at index
str.indexOf()       // Find position of substring

str.trim()          // Remove spaces from both ends
str.substring()     // Extract characters between indexes
str.slice()         // Extract part of a string
str.split()         // Convert string to array
str.replace()       // Replace first match
str.replaceAll()    // Replace all matches
str.includes()      // Check if substring exists

str.startsWith()    // Check starting text
str.endsWith()      // Check ending text
str.lastIndexOf()   // Find last occurrence

str.concat()        // Join strings
str.repeat()        // Repeat string

~ TO UPPER CASE
console.log(getName.toUpperCase) --> HITESH

~ TO LOWER CASE
const name1 = "HITESH"
console.log(name1.toLowerCase) --> hitesh


~ CHAR AT
console.log(getName.charAt(2)) --> t

~ INDEX OF 
console.log(getName.indexOf('t')) --> 2


~ TRIM
const newString = "    pranav    "
console.log(newString)  --> pranav

It removes the extra blank (white) spaces.

~ SUBSTRING
console.log(getName.substring(0,4)) --> HITE  (In Substring, we can only pass +ve values)

~ SLICE
console.log(getName.slice(0,4)) --> HITE
console.log("JavaScript".slice(0,4)) --> Java

In slice, we can even give negative values, where it starts from reverse.

~ SPLIT
console.log("apple,banana,mango".split(","));  --> ["apple", "banana", "mango"]

~ REPLACE
const url = "https://pranav.com/pranav%20mahajan"
url.replace('%20', '_')

Here, we give 2 inputs. One to search, and another to replace.

~ REPLACE ALL
console.log("a-b-a-b".replaceAll("a", "c")); --> c-b-c-b

~ INCLUDES
url.includes('pranav') --> true


~ STARTS WITH
console.log("JavaScript".startsWith("Java"));

~ ENDS WITH 
console.log("JavaScript".)endsWith("Script"));  --> true

~ LAST INDEX OF
let str = "hello world hello";

console.log(str.lastIndexOf("hello"));  --> true

~ CONCAT
let firstName = "Pranav";
let lastName = " Mahajan";

console.log(firstName.concat(lastName));  --> Pranav Mahajan

~ REPEAT
let str = "Hi ";

console.log(str.repeat(3));  --> Hi Hi Hi
________________________________________________________________________________________________________________
? NUMBER

There is a way through which we can explicitly declare a number as NUMBER type.

const bal = new Number(100)   (similar way to how we initialize objects)

~ ToString()
& We can even convert it to String.
console.log(bal.ToString())    (In this way, we can use String methods on it)

~ toFixed()
& We can even fix the Precision value
console.log(bal.toFixed(2)) -> 100.00 

~ toPrecision()
& This returns value in string datatype, and fixes total digits acc to the value set, and Rounds off as well.
const num = 45.678
console.log(num.toPrecision(3)) --> 45.7

const num = 123.89
console.log(num.toPrecision(3)) --> 124

~ toLocaleString()
& If we want to improve the readability of our numbers, then we use it. It includes commas within the number.
const num = 100000
console.log(num.toLocaleString()) --> 1,00,000

If we want to make it according to country standards (like Indian Standards)
-> console.log(num.toLocaleString('en-IN'))
________________________________________________________________________________________________________________
? MATHS

Many of the maths libraries come along with JS.

~ abs()
& -ve values becomes +ve
console.log(Math.abs(-2)) --> 2

~ round()
console.log(Math.round(4.6)) --> 5

~ ceil()
& top value meh round off krega
console.log(Math.ceil(4.2)) --> 5

~ floor()
& base value pe round off krega
console.log(Math.floor(4.8)) --> 4

~ min()
console.log(Math.min(1,2,3,4)) --> 1

~ max()
console.log(Math.max(1,2,3,4)) --> 4

~ random()
& it's value always comes between 0 and 1
console.log(Math.random()) --> 0.5220546605126605 (anything random could come)

& if we want to increase the range, then we can multiply it with a multiplier like 10.
& But we also want that its value don't come around 0 smthing, so we add one as well! 
console.log((Math.random() * 10) + 1) 


If we want the random no. in a specific range, then we use min and max concept.
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

We have to add min, otherwise, it will produce a random value below min.
________________________________________________________________________________________________________________
? DATE 

It represents a single moment in time in a platform independent format.
It is calculated in milli-seconds.
It is an Object.

JS team is trying to propose an easy way to use time function through "Temporal".
But it is still in process (not fully implemented yet)

let myDate = new Date()
console.log(myDate)        --> 2026-06-01T19:46:16.408Z  (we get smthing weird like thing)

& We can make its output look better by converting it to string.
console.log(myDate.toString())  --> Tue Jun 02 2026 01:18:08 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()) --> Tue Jun 02 2026

console.log(myDate.toISOString()) --> 2026-06-01T19:55:00.016Z

console.log(myDate.toJSON()) --> 2026-06-01T19:55:00.016Z

console.log(myDate.toLocaleDateString()) --> 2/6/2026

console.log(myDate.toLocaleString()) --> 2/6/2026, 1:25:00 am
We follow MM/DD/YY.

~ Timestamp
console.log(myTimeStamp);

console.log(myDate.getTime());

console.log(Math.floor(Date.now()/1000));
3:08
________________________________________________________________________________________________________________
* OPERATORS

? Binary Operator 
 +, -, *, /, %, ** (exponential ^)

? Unary Operator 
 ++, --

? Comparison Operator 
==, !=, >, >=, <, <=, 
=== (equal to & type), (STRICT-CHECK)
!== (not equal to & type)
-> This also checks the datatype. (returns true/false)

? Logical Operator 
&& (Logical AND), || (Logical OR), and ! (Logical NOT)
________________________________________________________________________________________________________________
? CONDITIONAL STATEMENTS
if, if-else, else-if

? Ternary Operators -> works for 3 operands 

condition ? true output : false output

(we see whether the value of condition is true or false)
a ? b : c

Eg: 

let age = 18;
let result = age >= 18 ? "adult" : "not adult";

console.log(result);
________________________________________________________________________________________________________________
? SWITCH CASE

let <variable> = value;

switch (<var>){

    case '<expr1>':     case '1':
        ___
        break;

    case '<expr2>'
        ___
        break;
    
    default:
        ___
}

Example:
const fruit = 'Papaya';

switch(fruit){
    case 'Orange':
            console.log('Oranges are 50 rupees/kg');
            break;
    case 'Mango':
    case 'Papaya':
        console.log('Mango and Papaya are 150 rupees/kg');
        break;
    default:
        console.log('Sorry, we are out of ${fruit}');
}
________________________________________________________________________________________________________________
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

*Syntax:
for(let <var> of <String/Array var>){
    ______    
}

*Example:
let str = "Apna College";

for(let i of str){
    console.log("i", = i));
}

When we make this loop, then we don't need to initialize anything. 

We neither see initialization, updation, or the stopping condition.

Everything happens automatically.


? 2) FOR-IN LOOP
-> By using this loop, we can obtain the KEY of our object.

-> We can use it for : Objects and Arrays

* Syntax:

for(let key in <Object variable>){
    _____
}

Eg:

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
________________________________________________________________________________________________________________
* ARRAYS
It is a collection of elts, where we enclose them in "Square Brackets [ ].
Any type of elt can be present within the Array.

Eg: let details = ["Pranav", 22, "B.Tech", true]

Array copy operations create "Shallow copy". (It shares the same reference point)

~ Another way of declaring Arrays
const arr = new Array(____)       (Here, no need of using Square Brackets)

* Operations:
arr.push(_)
arr.pop()
arr.unshift(_)  --> it inserts elt at the start
arr.shift(_)  --> it removes elt from the start
arr.includes(_)
arr.indexOf(_)
arr.join() -> this removes the bracket of array, and changes the type to String

* Slice & Splice
Slice  -> Kahan se lekar, kahan tk krna hai Slice.
Splice -> Kahan se start krna hai, aur kitno ko krna hai Splice. 

? Slice 
let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.slice(1, 3))  --> [2,3]

? SPLICE
let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.splice(1, 3))  --> [2, 3, 4]
If we want to remove any value in middle (or any specific index of array), then we use Splice.

We tell 2 things:
1) From which index to remove
2) Number of values to remove

arr.splice(2,2); 
-> It will remove 2 values, starting from index 2.

* MORE ARRAY OPERATORS

? CONCAT
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let mergedArray = arr1.concat(arr2)
console.log(mergedArray)  --> [ 1, 2, 3, 4, 5, 6 ]

~ Spread Operator
console.log(...arr1, ...arr2) --> 1 2 3 4 5 6       

This removes the brackets and commas, and spreads the values.
We insert "..." in the beginning, while mentioning our variable.

~ Flat Operator
It returns a new array with all sub-array elts concatenated into it recursively.
Basically, this operator can convert all sub-arrays.

Here, we also need to mention the "Depth" along, so in that case, we can mention it as "Infinity", so that it can include every sub-array present in an array, and convert them all in one single array.

const arr3 = [1,2,3 , [4,5,6] , 7 , [8,9]]    // array with sub-arrays
console.log(arr3.flat(Infinity))   -->   [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

~ Array.isArray()
console.log(Array.isArray("Pranav")) --> false

~ Array.from
console.log(Array.from("Pranav")) --> [ 'P', 'r', 'a', 'n', 'a', 'v' ]

It will break it into individual elts. Array.from doesn't work on numbers. It only works on strings.

It gives an empty array "[]" in result, if there's something it isn't able to identify, or produce a specific output from. 

console.log(Array.from({name: "pranav"}))  --> []

~ Array.of
let arr1 = 100
let arr2 = 200
let arr3 = 300

console.log(Array.of(arr1, arr2, arr3))  --> [ 100, 200, 300 ]
________________________________________________________________________________________________________________
* SHERIYANS

? HOISTING
-> Declarations are moved to the top.
(Not initializations)

That is, if suppose we have declared a variable or function in line 5 or later, and we call that or print it before it, then its possible to do that in JS, and it won't throw an error.
________________________________________________________________________________________________________________
? Object
It holds the details of an individual thing, in a key-value pair.

! Types of Objects:

* 1) Blank Object
We just initialize a variable with an empty curly bracket.

var a = {};

* 2) Filled Object
 
var car = {
    name: "Swift",
    price: "5 lakh",
    colour: "white",
    something: function(){}  -> METHOD
}

^ METHOD
A property whose value is actually a function.

^ ACCESSING THE PROPERTY ('.' Operator)
car.colour

^ UPDATING A PROPERTY
car.colour = "Silver"
________________________________________________________________________________________________________________
? WINDOW 

There are some things which are not available within JS, which we can find within the browser. 

But, we can still use them within JS (despite being not a part of it).

That we call as "Window". 

*/