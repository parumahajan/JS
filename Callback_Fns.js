const lang = ["C", "C++", "C#", "JS"]

//? lang.forEach(function name() {})    --> this is how a normal fn is written 

//& Callback doesn't have a name, so we remove it.
lang.forEach(function (item) {     // --> this is how a Callback fn is written 
    console.log(item)
} )  

/* OUTPUT:
C
C++
C#
JS
* __________________________________________________________________________________
Now, using Arrow Function:  (isme bhi naam nhi likhenge)
*/
lang.forEach( (item) => {
    console.log(item);
})

//*_________________________________________________________________________________
function printMe(item){
    console.log(item)
}
lang.forEach(printMe) // we just need to give reference here (and not execute ())
// Callback basically means to use a function as a parameter of another fn.
//* __________________________________________________________________________________

// We can even give multiple values as parameters inside a function:
const lang = ["C", "C++", "C#", "JS"]
lang.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

/* OUTPUT:
C    0    [ 'C', 'C++', 'C#', 'JS' ]
C++  1    [ 'C', 'C++', 'C#', 'JS' ]
C#   2    [ 'C', 'C++', 'C#', 'JS' ]
JS   3    [ 'C', 'C++', 'C#', 'JS' ]
*/