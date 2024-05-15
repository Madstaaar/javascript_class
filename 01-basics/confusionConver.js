/*CONFUSION IN CONVERSION OF DIFFERENT DATA TYPES GIVES UNPREDICTED RESULTS */
let a="str"
let b="ing"
console.log(a+b)
let num="1"
let num2=2
// console.log(num+num2);   return string
// console.log(num2+num+2+6);   return string
// let res=(1+num2+num)         
// console.log(typeof res)      gives weird output of 31 & type remains str

/* COMPARISION OF DIFFERENT DATA TYPES ALSO GIVES WEIRD RESULTS */

// console.log("a"==91);
// console.log("a"!=91);

console.log(""==0) //return true
console.log(+true) //return 1
console.log(undefined==null)