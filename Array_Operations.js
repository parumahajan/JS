let arr1 = [1,2,3]
let arr2 = [4,5,6]
let mergedArray = arr1.concat(arr2)  // CONCAT OPERATOR
//console.log(mergedArray)   
//console.log(...arr1, ...arr2) // SPREAD OPERATOR

const arr3 = [1,2,3 , [4,5,6] , 7 , [8,9]]    // array with sub-arrays (FLAT OPERATOR)
// console.log(arr3.flat(Infinity))

console.log(Array.isArray("Pranav"))  // IS ARRAY

console.log(Array.from("Pranav")) // FROM 

console.log(Array.from(12345)) // Array.from doesn't work on numbers. It only works on strings.

let a1 = 100
let a2 = 200
let a3 = 300

console.log(Array.of(a1, a2, a3)) 

// Usually how we define fn using variable is like this:

const user = function(){
    let username = "Pranav"
    console.log(this.username)     // --> undefined 
    console.log(this)              // --> many values
}
user()

/* 
Now, if we want to use Arrow functions here, then we have to do this:
1) Remove 'function' keyword.
2) Write "=>" infront of "()".
*/

const user = () => {
    let username = "Pranav"
    console.log(this.username)   // --> undefined 
    console.log(this)            // --> {}
}
user()

// _____________________________________________________

const add_two_nums = (num1, num2) => {
    return num1 + num2
}

console.log(add_two_nums(5, 4)); 
// _____________________________________________________

// IMPLICIT RETURN

// Here, we remove the Curly Brackets { } and the 'return' keyword.
// We bring the rest content on the same line.

const add_nums = (num1, num2) => (num1 + num2)
console.log(add_nums);

// If we use {} => write 'return' keyword (EXPLICIT)
// Only  use () => no need to write 'return' keyword (IMPLICIT)

const add_nums = (num1, num2) => ({username: "Pranav"})
console.log(add_nums);