for(let i = 1; i <= 7; i++){
    if(i == 5){
        console.log(`5 is Detected`)
        break
        //continue
    }
    console.log(`Value of i (with break) is ${i}`)
}

/*
Value of i (without continue) is 1
Value of i (without continue) is 2
Value of i (without continue) is 3
Value of i (without continue) is 4
5 is Detected
Value of i (without continue) is 5
Value of i (without continue) is 6
Value of i (without continue) is 7

Value of i (with continue) is 1
Value of i (with continue) is 2
Value of i (with continue) is 3
Value of i (with continue) is 4
5 is Detected
Value of i (with continue) is 6
Value of i (with continue) is 7

Value of i (with break) is 1
Value of i (with break) is 2
Value of i (with break) is 3
Value of i (with break) is 4
5 is Detected




*/