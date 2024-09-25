// ---------Immediately Invoked Function Expression-------------
// ----------------------------IIFE-----------------------------
//iife is the function that runs automatically

// semicolon at the end is important while using iife ,when using multiple
//iife it gives error

//whole body of function is surrounded in () after that () i.e (body)();


//____iife is used to create a local scope for variable which prevents them from polluting the global space
// by isolating the scope from the rest of the code it gives data privacy
(()=>{
    console.log("I am iife ;)");
})();

(function(a,b,c){
    console.log(a+b+c);
})(2,3,5);
((str)=>{
    console.log(`Hello, ${str} whats up...`);
    
})("groov");