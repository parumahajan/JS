if(true){
    const firstName = "Pranav"

    if(firstName === "Pranav"){
        const lastName 
    }
}

// There's another way, through which we can declare/create a fn, which is by creating a variable. and inside it we're specifying our function.

addfn1(5)
// Way-1 (Traditional Method)
function addfn1(num){
    return num + 1
}

addfn2(5)
// Way-2 (Using Variable)
const addfn2 = function(num){
    return num + 1
}

/*
But here, a problem occurs. when we use Hoisting to call a function before it is declared.
This problem occurs only when a function is declared by calling a variable.
This issue doesn't arise, when we use the traditional way.
*/