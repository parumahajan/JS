// * JAVASCRIPT EXECUTION CONTEXT 

/*

~ It runs our code in 2 main phases:

* 1) Global Execution Context (GEC)
-> Wherever GEC is created, there its referred by 'this'.

Everyone's execution context is different (whether its browser, node, deno, bun)
In Browser, this = Window Object

JS is Single-Threaded.

* 2) Function Execution Context (FEC)
Here, the execution takes place.

* 3) Eval Execution  (optional)
It is a property of global object.

~ How it is executed:

* 1) Memory Creation Phase (Creation Phase) (Memory Phase)
Memory is allocated for whatever variables we have created.
But it is not executed.

Every variable is collected, and undefined is stored in every variable.
It will be done line by line.

variable -> undefined
function -> definition (everything present inside the function goes inside it)
*/

let val1 = 10                         // -> undefined
let val2 = 5                          // -> undefined

function addNum(num1, num2){          // -> definition
    let total = num1 + num2
}

let result1 = addNum(val1, val2)      // -> undefined
let result2 = addNum(1, 4)            // -> undefined


//* 2) Execution Phase

let val1 = 10                         // val1 -> 10
let val2 = 5                          // val2 -> 5

function addNum(num1, num2){          // nothing gets executed here
    let total = num1 + num2
}

let result1 = addNum(val1, val2)      // a sandbox env is created (explained in deep below)
let result2 = addNum(1,4)             // same case as result1

/*
result1 -> it creates another execution context (new variable environment + execution thread) 

Jitni baar ye function execute hoga, utni baar ek naya box create hoga, which we call "NEW EXECUTION CONTEXT".

Here, a separate sandbox environment will be created for the function (addNum here)
and also an Execution Thread is also made, where entire execution is handled.

Due to this, these 2 phases will repeat again.

*1) Memory Creation Phase:          2) Execution Context
val1  -> undef                      num1 = 10
val2  -> undef                      num1 = 5    
total -> undef                      total = 15

This 'total' will return back to its parent execution context.
The executional context is created for the parameters present inside the function.
The global execution context gets deleted too, after its work is done.
*/

/*
* CALL STACK

    |    |
    |    |
    |    |
    |____|

Global Execution will be at the Bottom-most in call stack.

Fns will keep coming in call stack, executing, and removing from call stack.

Now, Problem comes if we have called one function in another fn.
If one() calls two(), and two() calls three().

|  three()  |   --> This will be removed first 
|___________|
|   two()   |   --> then this
|___________|
|   one()   |   --> then this
|___________|
|   GE      |
|___________|

We follow LIFO here (Last-In, First-Out)
*/