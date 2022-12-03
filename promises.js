//                                  "I Promise a Result!"
//                     "Producing code" is code that can take some time
//                  "Consuming code" is code that must wait for the result
//         A Promise is a JavaScript object that links producing code and consuming code

let p = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(`I am promise`);
        // resolve(true)
        reject(new Error(`I m an error`))
    }, 5000);
});
console.log(p);


