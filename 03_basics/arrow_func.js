const ab=function(a){
    return a;
}
// all three are valid arrow functions
const b=()=>{return a};
// if u applied curly {} return is explicit
const c=()=>a
// if u applied nothing content after => are returned implicitely
const d=(num,num2)=>(num+num2)
// also implicit return here 


console.log(d(2,4));
