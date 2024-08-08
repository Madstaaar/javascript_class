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
console.log(mJson);
// values are accessed by (.) and ([""]) 
// console.log(mJson.name);
// console.log(mJson["name"]);
// console.log(mJson["email"]);
// console.log(mJson["last name"]);

// changing values
// mJson.email="noobcoder34@google.com"
// console.log(mJson);


//freezing/locking json values
// Object.freeze(mJson)
// mJson.age=24
// console.log(mJson);

//fuctions on JSON
mJson.myfunc=function(){
    console.log("this is a function of mJson");
    // accessing json elements inside function
    console.log(`access all values...
        name=${this.name}
        degree=${this.degree}
        email=${this.email}
        mysum=${this.loggedIn}
        age=${this.age}`);
}

console.log(mJson.myfunc());



