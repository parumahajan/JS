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