const course = {
    name: "JS",
    price: 999,
    courseInstructor: "Hitesh"
}

console.log(course);

console.log("___");

const {courseInstructor : instructor} = course
// <DT> { <og_var_name> : <new_var> } = <Object name>

console.log(instructor)