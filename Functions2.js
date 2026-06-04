function calculateTotal(...num1){
    return num1
}
console.log(calculateTotal(500, 1000, 2000, 5000))


// But if we do this:
function calculateTotal(val1, val2, ...num1){
    return num1
}
console.log(calculateTotal(500, 1000, 2000, 5000))  --> [ 2000, 5000 ]


const user = {
    username: "Pranav",
    age: 22
}

function detailsOfObj(anyObject){
    console.log(`Name of user is ${anyObject.username} and Age of user is ${anyObject.age}`)
}

console.log(detailsOfObj(user));