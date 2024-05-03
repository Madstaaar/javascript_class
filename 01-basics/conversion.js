/*CONVERSIONS IN JS */

let a="33f"
                 //when convert this in number it becomes number but gives NaN ie not a number
console.log(a)
console.log(typeof a);

let convertString=Number(a)
console.log(typeof convertString);
console.log(convertString);
                            /*STRING TO BOOLEAN */
let count=" "
console.log(count)
console.log(typeof count)
                // covert empty string to boolean gives value of false and for whitespace or string it is true

let converBool=Boolean(count)
console.log(converBool)
console.log(typeof converBool)
                            /*NUMBER TO BOOLEAN */

let numb=0
console.log(typeof numb)
console.log(numb);

                /*converting number to bool every nonzero is true and zero val is false*/

let numToBool=Boolean(numb)
console.log(typeof numToBool)
console.log(numToBool);

let gh=true
let boolToNum=Number(gh)
console.log(typeof boolToNum);
console.log(boolToNum);

            /*BOOLEAN TO STRING */
let flag=true
let boolToString=String(flag)
console.log(typeof boolToString);
console.log(boolToString==flag);