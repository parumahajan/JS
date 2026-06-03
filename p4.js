var car = {
    name: "Swift",
    price: "5 lakh",
    colour: "white",
    something: function(){}  
}

car.greeting = function(){
    console.log("Hello World")
}

console.log(car.greeting)

car.greeting2 = function(){
    console.log(`Hello World, ${this.name}`)    
}

console.log(car.greeting2())
//^ ___________________________________________________________

//* COMBINING OBJECTS
const obj1 = {1: "a", 2: "b"}   // we took keys as Numbers, and values as Strings.
const obj2 = {3: "c", 4: "d"}
const obj3 = Object.assign(obj1, obj2)

console.log(obj3)