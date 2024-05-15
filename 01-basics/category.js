/* THERE ARE MAINLY TWO TYPES OF DATATYPES IN JS PRIMITIVE AND NON PRIMITIVE */

//primitive types: number, string, boolean, null, undefined
let l=1
let b=true
let c="string"
const id=Symbol("123")
const loid=Symbol("123")
console.log(id===loid);   //  === operator is used to check proper identical values 
                            //doesnt even change the type or convert it

//non primitive types: object ,function ,array ,class

const arr=[12,34,54,67]// this is array


let obj={
    name:"ibraheem",
    email:"enquiryforme286@gmail.com",
    phone:286128,
    married:false
}   //this is object


function func() {
    console.log("this is function...")
}                   //these are 2 ways of defining function
const funcw=function(){
    console.log("this is also function...");
}