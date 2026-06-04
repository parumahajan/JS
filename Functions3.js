function one(){
    const firstName = "Pranav"

    function two(){
        const lastName = "Mahajan"
        console.log(firstName);
    }

    // console.log(lastName); --> This will throw an error
    
    two()
}

one()  // --> if we don't call it, the two() will also not get executed

// JS meh line-by-line execution hoti hai, so the moment it will find error in a line, the lines below it won't get executed.