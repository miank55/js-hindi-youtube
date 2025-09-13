// Primitive

// 7 types : string , number ,boolean, null, undefined,symbol,bigint


const score =100
const scoreValue=100.3

const isLoggedIn =false
const outsideTemp=null
let userEmail;
const id= symbol ('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigNumber=34567788656556n



//reference (Non primitive)
//Array,Objects,functions

const heroes =["shaktiman","nagraj","doga"];
let myObj={
    name:"mayank",
    age:21,
}
const mmyFunction = function(){
    console.log ("hello world");

}
console.log(typeof heroes);