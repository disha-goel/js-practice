/*
Primitives & Non-primitives datatypes :
String,number,bigInt,null,undefined,boolean,symbol(uniqueness)
obects,arrays,functions
*/
let value = 33;
console.log(typeof value); //number
let add = 3 + 4;
console.log("add=", add, ",type:", typeof add);
let isLoggedin = true;
console.log("isLoggedIn=", isLoggedin, ",type:", typeof isLoggedin); //boolean
//JavaScript is dynamically typed language
let state;
console.log("state:", state, "type:", typeof state); //undefined
let city = null;
console.log("city:", city, "type:", typeof city); //object
//null is of object type (quirk in js) but undefined is itself a type
let marks = "66"; //string
let score = 66; //number
let num = "66abc"; //string
console.table([
  { variable: "Marks", value: marks, type: typeof marks },
  { variable: "score", value: score, type: typeof score },
  { variable: "num", value: num, type: typeof num },
]);
let valueNum = Number(num);
let logged = Number(isLoggedin);
console.log(logged); //after converting to number,true=1,false=0
console.log("valueNum=", valueNum, "& type= ", typeof valueNum); //NaN as value is Not a Number
//But NOTE:
//typeof NaN is still a number
//here 66abc is a invalid numeric string
let valueCity = Number(city); //0
let valueState = Number(state); //NaN
let strCity = String(city); //"null"

console.table([valueCity, valueState, strCity]); //old way ,not used or preferred[table one]
/*
==(Equality operator) checks only value 
if types are different then it will convert it 
*/
console.log([] == ""); //true
/* 
=== strict operator 
Checks both type and value 
*/
//Issue always return false as js compares object by reference,not value
//console.log([] === ""); //false
let number = 80;
if (number <= 90) {
  console.log("Pass");
}
/*
1=> true,0=>false,""=>false
"Yashu"(string)=>true
*/
let id1 = Symbol("id"); //Symbol(id)
let id2 = Symbol("id"); //Symbol(id)
console.log(id1 == id2); //false(unique value)
