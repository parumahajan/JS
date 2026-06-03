let obj1 = new Object()

let obj2 = {}

obj1.id = "123"
obj1.name = "Pranav"
obj1.isLoggedIn = true

// Now, we'll create sub-objects
let regUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Pranav",
            lastName: "Mahajan"
        }
    }
}

// console.log(regUser.fullname.userFullName.firstName);

console.log(Object.keys(regUser))   // [ 'email', 'fullName' ]
console.log("___");

console.log(Object.values(regUser))
console.log("___");
/*
[
  'abc@gmail.com',
  { userFullName: { firstName: 'Pranav', lastName: 'Mahajan' } }
]
*/

console.log(Object.entries(regUser))
/*
[
  [ 'email', 'abc@gmail.com' ],
  [ 'fullName', { userFullName: [Object] } ]
]
*/
// And let's suppose some object is present, but not defined, or if it doesn't exists
// Then we use "?" in front of that object.