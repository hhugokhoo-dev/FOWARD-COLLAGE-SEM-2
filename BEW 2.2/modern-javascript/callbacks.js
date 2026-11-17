function greet(callback){
    console.log("hello!")
    callback();  //here we are calling back the functio passed as an arguement 
}

//notice how Hello will be outputed first, follwed by what we passed in as an arguement below
//Think of it essentially as calling an arguement passe din as a function, that is a callback.



greet (function sayName(){
    console.log("John Doe")
})

//output :
// hello!
// John Doe

//

function outsideCalledFunction(passAFunctionhere){
    console.log("This is a normal console log from the native function itself")
    passAFunctionhere()  //Here we call the function that is passed in
}

//use()to pass the function
function insideFunction1(){
    console.log("this is from the first insideFunction")
}

function insideFunction2(){
    console.log("this is from the second insideFunction")
}

outsideCalledFunction(insideFunction1)
outsideCalledFunction(insideFunction2)