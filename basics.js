/*                 

* JAVASCRIPT

We can directly write and run our JS code on our console of any website (using Inspect).

Ctrl + k -> Clears the console
___________________________________________________________
? ALERTS 
-> Popups
Eg:  alert("Apna College");

? PROMPTS
-> Alerts along with taking an input
Eg: prompt("hello!");

-> We can store that input in some variable.

Eg:  
let Name = prompt("Enter your Name");
console.log(Name);
___________________________________________________________
! CHATPER 1 - VARIABLES AND DATATYPES

? console.log()
-> used to log (print) a message on the console.
Eg: console.log("Apna College");

*(we can write it both in ' ' or " ")

? node <file_name>
We can write "node basics.js" in the terminal, which also do the same thing as producing the output.

# In order to connect js code to the website (browser), we'll create an HTML file, and connect it with our js file.

In this way, we will establish an Indirect connection between JS file and the browser.
___________________________________________________________
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
___________________________________________________________
? RULES FOR VARIABLES:

1) Case-sensitive ('a' and 'A' are different)
2) Only letters, digits, _ ,and $ are allowed. (the only special characters are: dollar and underscore)
3) 1st character can never be a digit.
4) Reserved keywords should not be kept as variable names.

There are other primary ways to define variables using keywords:

? 1) var
*-> It can both be re-declared and updated.
*-> Scope: Global (can be used anywhere in the code)
-> Functional scope

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

-> We can use it to fix con stants like PI, AREA (formula).

Eg: const PI = 3.14;

& let and const are a new way of declaring variables, which come under ES6. (Modern JS)
___________________________________________________________
? FUNCTIONS 
We use them in order to use the code, and to call it whenever we need. (We can run functions with different parameters - values)

The parameters which we send during calling a function are known as "Arguments". It is the real value, we pass.

Whereas, Parameters inside a fn store the value of those Arguments.

& IMPORTANT
When we declare a variable inside a function, then its defined as functional scope.

That is, even if a variable is declared within a loop present within a fn, we can still use it throghout our fn.___________________________________________________________
? DATA TYPES 

* 1) PRIMITIVE (7)
-> Number (includes -> int, float, double etc.)
-> String 
-> Boolean (T,F)
-> Null
-> Undefined

-> Bigint (output ends with 'n')
-> Symbol

* NO-BRACKET -> PRIMITIVE
* BRACKET    -> REFERENCE

* REFERENCE 
()
[] -> used for arrays
{} 

Here, We can't directly copy the values, which are present inside these brackets. Instead, we pass a Reference.

Reference is any value, whose real value isn't passed on copying, and only reference is passed.

So, if any change is made in b, then a's value will also change.

! EXAMPLE:
let a = [1,2,3,4];
let b = a;

b will have reference to a's [1,2,3,4].
-----------------------------------------------------------
* 2) NON-PRIMITIVE
-> Objects (sub-categories: Arrays, Fns)

Object -> Collection of Values

We declare multiple primitive datatypes under one single variable, and we call that as an object.

In our object, key value pairs are stored.

& We generally declare objects using the keyword "const".
 
*Eg: (Just like we write in SQL)

const student = {
    fullName : "Pranav Mahajan",
    age : 21,
    cgpa : 9.23,
    isPass : true,
};

OR     

const student = {fullName:"PranavMahajan", age:21};

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
___________________________________________________________
? Strings

Strings are unique/special in javascript.

Anything we try to add with a string, it gets attached.
(if we try to add string with a number, then that no. gets converted to a string, and then it )
Eg: 
"123" + 1 = 1231
"abc" + 123 = abc123
___________________________________________________________
? OPERATORS

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
___________________________________________________________
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
___________________________________________________________
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
___________________________________________________________
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
___________________________________________________________
* SHERIYANS

? HOISTING
-> Declarations are moved to the top.
(Not initializations)

That is, if suppose we have declared a variable or function in line 5 or later, and we call that or print it before it, then its possible to do that in JS, and it won't throw an error.
___________________________________________________________
? PUSH - POP  SHIFT UNSHIFT (In Arrays)
Unshift (Push) -> To add one value
Shift   (Pop)  -> To remove one value
___________________________________________________________
? SPLICE
If we want to remove any value in middle (or any specific index of array), then we use Splice.

We tell 2 things:
1) From which index to remove
2) Number of values to remove

arr.splice(2,2); 
-> It will remove 2 values, starting from index 2.
___________________________________________________________
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
___________________________________________________________
? WINDOW 

There are some things which are not available within JS, which we can find within the browser. 

But, we can still use them within JS (despite being not a part of it).

That we call as "Window". 

*/