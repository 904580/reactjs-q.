//synchronously

// console.log("Program Starts");
// function f1(a,b){
//     const sum = (a+b);
//     console.log(sum)
// }
// f1(2,3);
// console.log("Program Ends");



//asynchronously---
// console.log("starts...");
// setTimeout(()=>{
//     console.log("miliseconds programs")

// },2000);

// console.log("finishs...");



//callback hell------------->>

// getData(function(a){
//     getMoreData(a, function(b){
//         getMoreData(b,function(c){
//             getMoreData(c,function(d){
//                 getMoreData(d,function(e){

//                 });

//             });

//         });
//     });

// });



//call----------

// var person1={
//     firstName:"jon",
//     lastName:"bob"

// };
// var person2={
//     firstName:"sammy",
//     lastName:"sinha"
// };
// function myfun(greeting){
//     console.log(greeting+ ' ' + this.firstName + ' '+ this.lastName);
// }
//  myfun.call(person1,'hello');
//  myfun.call(person2,'hello');

 //apply=============

// const person1={
//     firstName:"anoop",
//     lastName:"saini"
// };

// const person2={
//     firstName:"Himanshu",
//     lastName:"chauhan"
// };

// function say(greeting){
//     console.log(greeting+ ' ' +this.firstName+ ' '+this.lastName);
// }
// say.apply(person1,['hello']);
// say.apply(person2,['hello']);



//bind---------
const person1={
    firstName:"anoop",
    lastName:"saini"
};

const person2={
    firstName:"Himanshu",
    lastName:"chauhan"
};

function say(){
    console.log('hi'+ ' ' +this.firstName+ ' '+this.lastName);
}
var hello1=say.bind(person1);
var hello2=say.bind(person2);

hello1();
hello2();







