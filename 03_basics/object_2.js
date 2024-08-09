const obj=new Object()  //singleton object
const obj2={} // object literal
obj2.name="object 2"
obj2.class="literal object"
obj2.use="object_2.js"
// console.log(obj2);


//object inside object
let mObj={

    email:"name123@gmail.com",
    status:"loggedIn",
    name:{
        fullname:{
            firstname:"ibrahim",
            lastname:"khan"
        }
    },
    active:true
}
// console.log(mObj.name.fullname?.lastname); //? sign is not necessary its used to seee if json contains that value or not 


//merging 
let m={one:1,two:2,three:3}
let n={a:1,b:2,c:3}
// const b=Object.assign({},m,n)//all objects are added to the first parameter given, here empty obj {}
// console.log(m);

// const res={...m,...n}
// console.log(res);
console.log(Object.keys(mObj));//gives array of all keys
console.log(Object.values(mObj));

console.log(mObj.hasOwnProperty("logedin")); //check for the key



