//const marks = {Maths:72, Science:80, English:85};

// console.log(marks["Maths"]);
//marks["Science"] = 1;
//marks["Science"] += 1;
// console.log(marks.Science);

//_________________________________________________________
// const profile = {
//     userName : "shradhakhapra" ,
//     isFollow: false,
//     posts : 195,
//     followers : 569000,
//     following : 4,
//     about : "Apna College",
// };

//console.log(typeof profile["userName"]);

//_________________________________________________________
// let number = prompt("Enter a number: ");

// if(number % 5 == 0){
//     console.log(number, "is multiple of 5");
// }
// else{
//     console.log(number, "is not a multile of 5");
// }


const profile = {
    userName : "shradhakhapra" ,
    isFollow: false,
    posts : 195,
    followers : 569000,
    following : 4,
    about : "Apna College",
};

for(let i in profile){
    console.log(i);
}

