// const sum = (a,b,c) => {
//     return a+b+c;
// }
// console.log(sum(2,3,4));
// console.log(sum(2,3,4));
// console.log(sum(2,3,4));
// console.log(sum(2,3,4));

// let cars = [
//     {
//       "color": "purple",
//       "type": "minivan",
//       "registration": new Date('2017-01-03'),
//       "capacity": 7
//     },
//     {
//       "color": "red",
//       "type": "station wagon",
//       "registration": new Date('2018-03-03'),
//       "capacity": 5
//     },
//     {
//         "color": "green",
//         "type": "station wagon",
//         "registration": new Date('2018-03-03'),
//         "capacity": 5
//     },
//   ]
//   for(let i = 0 ; i < cars.length; i++){
//     cars[i].color =  cars[i].color.toUpperCase();
//   }
//   console.log(cars);

//  Replace every 4th character with underScore
// var str = "abcdefoihewfojias".split("");
// for (let i = 3; i < str.length - 1; i+=4) {
//      str[i] = "_";
// }
// console.log( str.join("") );
// Sort 
// const compare = (a,b) =>{
//     return b-a;
// }
// let arr = [1,3,45,898,234,543];
// for(let ele of arr) console.log(`for of loop `+ ele);
//map always returns an new array !
// let newArr = arr.map((val) => {
//     console.log(`printing with the help of map `+val);
//     return val * val;
// })
// console.log(newArr);
// let newArr = arr.filter((val) =>{
//     return val&1^1;
// })
// console.log(newArr);
// let newArr = arr.reduce((val1,val2) =>{
//     return val1^val2;
// })
// console.log(newArr);
// let a = prompt("Enter a number");
// arr.push(a);
// console.log(arr);

// console.log(arr.sort(compare));
// console.log(arr.reverse());


//game to guess a number 
// let number = Math.floor(Math.random() * 101);
// let chance= 0;
// while(chance!== 10)
// {
//     let no = prompt("Enter the Guess Number : ");
// if(no < number)
// {
//     console.log("Your number is less than Guess Number");
// }
// else if(no > number)
// {
//     console.log("Your number is greater than Guess Number");
// }
// else if(no == number) 
// {
//     console.log(`Your Score out of 100 is  : ${100-chance}`);
//     console.log("Congratulation! You Guess that Number : "+number);
//     break;
// }
// else 
// {
//     // do nothing 
// }
// chance++;
// }
// if(chance === 10)
// {
//     console.log("Try Next Time - Your chances are Finished.");
// }


