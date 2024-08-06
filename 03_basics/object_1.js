                                /*OBJECTS */
// there are two types of objects in js singleton and object literals
let mySym=Symbol("html")
const mJson={
    name : "ibrahim",
    email:"ibrahim@hotmail",
    loggedIn: true,
    age:23,
    degree:"masters",
    "last name":"khan",
    [mySym]:"symbol"

}
console.log(mJson.name);
console.log(mJson["name"]);
console.log(mJson["email"]);
console.log(mJson["last name"]);



