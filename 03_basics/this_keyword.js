// this keyword is used to refer  current context 
const myObj={
    name:"myName",
    class:"myClass",
    school:"mySchool",
    test:function myFunc(name){
        console.log(`${this.name},  welcome to the school...`);
        //we have to give context to access it
    }

}

//--WE CAN ONLY USE IT WITH OBJECTS


function nothingfunc(name){
    name="nothing"
    console.log(this.name);
    //THIS GIVES UNDEFINED IF I TRY TO GIVE CONTEXT
};

myObj.test();
console.log(nothingfunc())
console.log(this);
//                                  ***WE CANT USE THIS IN ANY FUNCTION