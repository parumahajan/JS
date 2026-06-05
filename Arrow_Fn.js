
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