// THIS KEYWORD

const user = {
    username : "Pranav",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        // console.log(this)
    }
}

// user.welcomeMessage()

// console.log(user.welcomeMessage); 

console.log(this)     // --> {}
// This happens because we're in a node env. due to which, this refers to an empty object.
// Earlier the engine was found only in the Browser, but then later it was taken out, and was made into standalone engines like Node, Bun, or Deno.
// In Browser, whenever the engine  runs, then the most global object is "Window" object. This is the reason, why we are able to capture all the events of windows.

function chai(){
    let username = "Pranav"
    console.log(this.username)   // --> undefined
    console.log(this);           // --> we get a lot of values
}
chai()
console.log(this);               // --> {}

// When we print this outside the function, then we get only "undefined", but when we print this inside a function, then we see, we get a lot of values.