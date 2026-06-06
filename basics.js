/*                 
* JAVASCRIPT 

We can directly write and run our JS code on our console of any website (using Inspect).

Ctrl + k -> Clears the console
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
? FUNCTIONS 
We use them in order to use the code, and to call it whenever we need. (We can run functions with different parameters - values)

The parameters which we send while calling a function are known as "Arguments". It is the real value, we pass.

Whereas, Parameters inside a fn store the value of those Arguments.

! IMPORTANT
When we declare a variable inside a function, then its defined as functional scope.

That is, even if a variable is declared within a loop present within a fn, we can still use it throghout our fn.
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
* TYPEOF
To know the typw of a variable, we use "typeof".
console.log(typeof ___)

# when we check the type of null. then it comes to be "object".
# and of undefined, its undefined
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
? SWITCH CASE

let <variable> = value;

switch (<var>){

    case '<expr1>':    (Like  case '1':)
        ___
        break;
        

    case '<expr2>'
        ___
        break;
    
    default:
        ___
}
*  SHORTCUT KEY (To Copy)
-> Shift + Alt + Down 

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
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
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

We can even write Switch Case in just 1 line all-together 
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

If Default is not added, then it will execute the entire code starting from itself till bottom, except for default.

* TRUTHY / FALSY

const userEmail = "pranavmahajan123@gmail.com"   //  if it was ""  or [], then it would come false
if(userEmail){
    console.log("Email Exists")
}
else{
    console.log("Email doesn't exist");
}

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

There is a way through which we can check whether an array is empty or not:
if(userEmail.length === 0){
    console.log("Array is empty")
}

To check if Object is Empty:
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){  // By doing this, we get an array of keys.
    console.log("Object is empty");
}

* Knowledge Fact:
When we run this on our browser's console, then we get these as output:
false == 0   --> true
false == ''  --> true
- == ''      --> true
_______________________________________________________________________________________________________________
* Nullish Coalecing Operator (??)

We will be focused mainly on 2 keywords: null and undefined

The reason why we use this is because sometimes we can get 2 values when we are fetching information from the database (like firebase), then there's a chance that out of those 2 values, any of it could be null or undefined.

This operator does Type-Safety Check.

It avoids null and undefined.

If suppose we are given choice among some, then we choose the first non-null/defined value.

Eg: val1 = null ?? 23 ?? 33  --> 23
_______________________________________________________________________________________________________________
* Ternary Operator

& Syntax: condition ? true : false

const teaPrice = 60
teaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80");
_______________________________________________________________________________________________________________
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
_______________________________________________________________________________________________________________
? Object
It holds the details of an individual thing, in a key-value pair.

~ Objects can be declared in 2 ways: 
1) Literal       --> Never Singleton
2) Constructor   --> Always Singleton

Singleton - Whenever we create a constructor through it, then it creates a "Singleton" object.
But, when we declare it as Literals, then Singleton is not formed.

~ Types of Objects:

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

~ There's a problem which occurs in case of Dot Operator.
But we can't access the property if the key is written as "String".

Eg: 
var car = {
    "fullName": "Swift Dezire"
}

Now, this cannot be accessed just by using dot operator "." 
We need to use Square Brackets for this accessing its property.

console.log(car["fullName"])

~ FREEZE
We can even lock the values using Freeze.
& Syntax: Object.freeze(<var_name>)

^ UPDATING A PROPERTY
car.colour = "Silver"

? Using as functions
We can even use the objects as functions.

car.greeting = function(){
    console.log("Hello World")
}

console.log(car.greeting) --> [Function (anonymous)]

console.log(car.greeting()) 

~ O/P:
Hello World
undefined

& This means that the function is not executed, and we have only received the reference.

Now, if we want to reference any name from the object, then we'll use string interpolation.

car.greeting2 = function(){
    console.log(`Hello World, ${this.name}`)    --> We'll use Backticks `` and String Interpolation ${}
}

console.log(car.greeting2())  

~ O/P:
Hello World, Swift
undefined

* WAYS OF CREATING OBJECTS:

& WAY 1
const obj1 = new Object()  --> Creates Singleton Object 

& WAY 2
const obj2 = {}  --> Creates Non-Singleton Object 

obj1.id = "123"
obj1.name = "Pranav"
obj1.isLoggedIn = true

Now, we'll create sub-objects
let regUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Pranav",
            lastName: "Mahajan"
        }
    }
}

console.log(regUser.fullname.userFullName.firstName);

& And let's suppose some object is present, but not defined, or if it doesn't exists
& Then we use "?" in front of that object.
console.log(regUser.fullname?.userFullName.firstName);

* COMBINING OBJECTS
const obj1 = {1: "a", 2: "b"}   // we took keys as Numbers, and values as Strings.
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign(obj1, obj2)

console.log(obj3) --> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

~ Object.assign()
& It copies all enumerable own properties from one or more source objects tot a target object.

& SYNTAX : Object.assign(target, source)

But sometimes, the target arrays can be more, so for that, we take an empty array while taking the parameters for Object.assign.

& Object.assign({}, target, source)

Eg: Object.assign({}, obj1, obj2, obj4)  --> {} : target, obj 1,2,4 : source

* ANOTHER WAY OF DOING IT : (Spread operator)

const obj3 = {...obj1, ...obj2}
console.log(obj3)  --> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

~ If we want all its keys and values
Object.keys(regUser))
Object.values(regUser))
Object.entries(regUser))
_______________________________________________________________________________________________________________
* DE-STRUCTURING

Destructuring can occur in both Objects and Arrays.

const course = {
    name: "JS",
    price: 999,
    courseInstructor: "Hitesh"
}

const {courseInstructor : instructor} = course
console.log(instructor)    --> Hitesh

& SYNTAX: <DT> { <og_var_name> : <new_var> } = <Object name>
_______________________________________________________________________________________________________________
* APIs

We use JSON.

JSON is also an Object.
It is written just like we write for object.
The only difference of writing here is, that we don't define any variable for it, and both Keys and Values are Strings (rather than just values beings strings in JS Objects).

{
    "name": "JS",
    "price": 999,
    "courseInstructor": "Hitesh"
}

Tools like JSON formatter can help us understand what's written in JSON code.
_______________________________________________________________________________________________________________
* Functions

We create a function definition (function-name), and write function scope (content written inside fn) within it.

& SYNTAX: 
function <fn_name>() {

}

We add Parenthesis () in front of fn name, so it can add reference, and execute it.

When we are defining a fn, we have to pass some parameters, and
When we are calling  a fn, we have to pass some arguments.

In order to print our result, we have to use "return" keyword.
After it, nothing gets printed.

function loginUserMessage(username){
    
    if(username === undefined){   // OR if(!username)
        console.log("Please enter a username")
        return
    }

    return `${username} just logged in`
}

console.log(loginUsername("Pranav"))   --> we are passing argument here
console.log(loginUserMessage())        --> we are not passing argument here

If we don't pass the arguments, then it would return 'undefined'.

& We can also use Functions like this:
const user = {
    username: "Pranav",
    age: 22
}

function detailsOfObj(anyObject){
    console.log(`Name of user is ${anyObject.username} and Age of user is ${anyObject.age}`)
}

console.log(detailsOfObj(user));
_______________________________________________________________________________________________________________
* REST Operator (...)

We use it, when we are passing too many values in the argument of a calling function.

Rest operator and Spread operator have the same way of writing, which is "..."
The only main difference is the Usecase.

function calculateTotal(...num1){
    return num1
}
console.log(500,1000,2000,5000)  --> [ 500, 1000, 2000, 5000 ]

& But if we do this:
function calculateTotal(val1, val2, ...num1){
    return num1
}
console.log(calculateTotal(500, 1000, 2000, 5000))  --> [ 2000, 5000 ]
_______________________________________________________________________________________________________________
* SCOPE : {}

It comes along with Functions, and if-else

Here, we revolve around: let, const, and var

let and const have block scope,
while var has global scope. 

# There is even a node scope, and a windows scope.
We access Windows scope through a keyword.

When we check it on our browser's console, then the global scope would be different, and
When we check it on our code env (through Node), then that global scope would be different.

& When we define a nested-function, then we follow this rule:
Chota bade se ice-cream le skta hai, but Bada chote se nhi le skta.

Bolne ka mtlb hai, ki when there are 2 fns defined, where one fn is nested in another, then the nested fn can inherit properties (or use them), since the one is defined globally for the nested one, so it can use it.
But the one, present above the nested fn cannot inherit or use any of the properties present inside the scope of the nested fn.

function one(){
    const firstName = "Pranav"

    function two(){
        const lastName = "Mahajan"
        console.log(firstName);
    }

    console.log(lastName); --> This will throw an error, if we write this
    
    two()
}

one()  // --> if we don't call it, the two() will also not get executed

& JS meh line-by-line execution hoti hai, so the moment it will find error in a line, the lines below it won't get executed.

if(true){
    const firstName = "Pranav"

    if(firstName === "Pranav"){
        const lastName 
    }
}

There's another way, through which we can declare/create a fn, which is by creating a variable. and inside it we're specifying our function.

addfn1(5)                   --> We used concept of Hoisting here
 Way-1 (Traditional Method)
function addfn1(num){
    return num + 1
}

addfn2(5)
 Way-2 (Using Variable)
const addfn2 = function(num){
    return num + 1
}

& Problem
But here, a problem occurs. when we use Hoisting to call a function before it is declared.
This problem occurs only when a function is declared by calling a variable.
This issue doesn't arise, when we use the traditional way.
_______________________________________________________________________________________________________________
* THIS KEYWORD
It tells about the current context. (Points to the current object)

const user = {
    username : "Pranav",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}

user.welcomeMessage() --> Pranav, welcome to the website

console.log(user.welcomeMessage); 

console.log(this)     // --> {}

This happens because we're in a node env. due to which, this refers to an empty object.

Earlier the engine was found only in the Browser, but then later it was taken out, and was made into standalone engines like Node, Bun, or Deno.

In Browser, whenever the engine  runs, then the most global object is "Window" object. This is the reason, why we are able to capture all the events of windows.

function chai(){
    let username = "Pranav"
    console.log(this.username)   // --> undefined
    console.log(this);           // --> we get a lot of values
}
chai()
console.log(this);               // --> {}

When we print this outside the function, then we get only "undefined", but when we print this inside a function, then we see, we get a lot of values.
_______________________________________________________________________________________________________________
* ARROW FUNCTIONS

Arrow functions do not have their own this. We can use this, but they inherit this from the surrounding scope.

& Usually how we define fn using variable is like this:
const user = function(){
    let username = "Pranav"
    console.log(this.username)     // --> undefined 
    console.log(this)              // --> many values
}
user()

& Now, if we want to use Arrow functions here, then we have to do this:
1) Remove 'function' keyword.
2) Write "=>" infront of "()".

const user = () => {
    let username = "Pranav"
    console.log(this.username)   // --> undefined 
    console.log(this)            // --> {}
}
user()

& Syntax:  <DT> <Var> = () => {}

    const add_two_nums = (num1, num2) => {
    return num1 + num2
}

console.log(add_two_nums(5, 4)); 

* IMPLICIT RETURN

Here, we remove the Curly Brackets { } and the 'return' keyword.
We bring the rest content on the same line.

const add_nums = (num1, num2) => (num1 + num2)
console.log(add_nums);

If we use {} => write 'return' keyword (EXPLICIT)
Only  use () => no need to write 'return' keyword (IMPLICIT)

const add_nums = (num1, num2) => ({username: "Pranav"})
console.log(add_nums);
_______________________________________________________________________________________________________________
* IIFE (Immediately Invoked Function Expressions)

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

* Using Arrow Function (with variable) - (SIMPLE IFFE) 
( (name) => {
    console.log(`DB Connected to ${name}`)
}) 
('Pranav')   // calling the function
_______________________________________________________________________________________________________________
 * JAVASCRIPT EXECUTION CONTEXT 

~ It runs our code in 2 main phases:

* 1) Global Execution Context (GEC)
-> Wherever GEC is created, there its referred by 'this'.

Everyone's execution context is different (whether its browser, node, deno, bun)
In Browser, this = Window Object

JS is Single-Threaded.

* 2) Function Execution Context (FEC)
Here, the execution takes place.

* 3) Eval Execution  (optional)
It is a property of global object.

~ How it is executed:

* 1) Memory Creation Phase (Creation Phase)
Memory is allocated for whatever variables we have created.
But it is not executed.

Every variable is collected, and undefined is stored in every variable.
It will be done line by line.

variable -> undefined
function -> definition (everything present inside the function goes inside it)

let val1 = 10                         -> undefined
let val2 = 5                          -> undefined

function addNum(num1, num2){          -> definition
    let total = num1 + num2
}

let result1 = addNum(val1, val2)      -> undefined
let result2 = addNum(1, 4)            -> undefined


* 2) Execution Phase

let val1 = 10                         // val1 -> 10
let val2 = 5                          // val2 -> 5

function addNum(num1, num2){          // nothing gets executed here
    let total = num1 + num2
}

let result1 = addNum(val1, val2)      // a sandbox env is created (explained in deep below)
let result2 = addNum(1,4)             // same case as result1

result1 -> it creates another execution context (new variable environment + execution thread) 

Jitni baar ye function execute hoga, utni baar ek naya box create hoga, which we call "NEW EXECUTION CONTEXT".

Here, a separate sandbox environment will be created for the function (addNum here)
and also an Execution Thread is also made, where entire execution is handled.

Due to this, these 2 phases will repeat again.

*1) Memory Creation Phase:          2) Execution Context
val1  -> undef                      num1 = 10
val2  -> undef                      num1 = 5    
total -> undef                      total = 15

This 'total' will return back to its parent execution context.
The executional context is created for the parameters present inside the function.
The global execution context gets deleted too, after its work is done.

* CALL STACK

    |    |
    |    |
    |    |
    |____|

Global Execution will be at the Bottom-most in call stack.

Fns will keep coming in call stack, executing, and removing from call stack.

Now, Problem comes if we have called one function in another fn.
If one() calls two(), and two() calls three().

|  three()  |   --> This will be removed first 
|___________|
|   two()   |   --> then this
|___________|
|   one()   |   --> then this
|___________|
|   GE      |
|___________|

We follow LIFO here (Last-In, First-Out)
_______________________________________________________________________________________________________________
* HOISTING
-> Declarations are moved to the top. (Not initializations)

That is, if suppose we have declared a variable or function in line 5 or later, and we call that or print it before it, then its possible to do that in JS, and it won't throw an error.
_______________________________________________________________________________________________________________
* WINDOW

There are some things which are not available within JS, which we can find within the browser. 

But, we can still use them within JS (despite being not a part of it).

That we call as "Window". 
_______________________________________________________________________________________________________________
*/