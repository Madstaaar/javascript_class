//object destructuring 
const obj={
    course_name:"javascript mastery",
    course_instructor:"Hitesh Chaudhary",
    course_duration:"9hrs",
    course_destination:"www.youtube.com"
}

const {course_instructor: teach}=obj
// instead of writing obj.course_instructor i can simply shorten it by this syntax
console.log(teach);
