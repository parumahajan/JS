function loginUserMessage(username){
    
    if(username === undefined){   // if(!username)
        console.log("Please enter a username")
        return
    }

    return `${username} just logged in`
}

// console.log(loginUsername("Pranav"))   --> we are passing argument here
console.log(loginUserMessage())           // --> we are not passing argument here

// If we don't pass the arguments, then it would return 'undefined'.