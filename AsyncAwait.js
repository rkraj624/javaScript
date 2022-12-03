// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

/* async function harry() {
    let delhiWeather = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("27 Deg");
        }, 1000);
    })
    let kolkataWeather = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("20 Deg");
        }, 7000);
    })
    let delhiW = await delhiWeather;
    let kolW = await kolkataWeather;
    return [delhiW, kolW]
} 
console.log(`Welcome to weather control room `);
let a = harry();
console.log(a); */

const loadScript = async (src) =>{
    return new Promise((resolve, reject) =>{
        let script = document.createElement("script")
        script.src = src;
        script.onload = () =>{
            resolve(src + ` Done Successfull `)
        }
        document.head.append(script);
    })
}
const main = async() =>{
    let a = await loadScript("index.js");
    console.log(a);
}
main();
