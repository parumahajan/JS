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