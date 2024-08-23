function func1(arg){
    return(arg)    
}
console.log(func1(200,300,500))//by this method you can take only one parameter


function myFunc(...val){
    return val;
}
console.log(myFunc(200,500,900,300));//this return all parameters in array

//
function func2(obj){
    console.log(`name is ${obj.name} and class is ${obj.class}`);   
}
func2({
    name:"test1",
    class:"testclass"
})
//
const arr=[4.56,3,4,2,5]
function displayArr(input){
    return input[2]
}
console.log(displayArr(arr));
