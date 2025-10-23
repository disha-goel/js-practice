/*
This is a comment
3 types of variables-let,const,var
 */
const name = "Yashuu";
let age = 19;
var state = "Haryana";
course = " BE - CSE";//declared without keyword(valid) but not recommended
let city;
//Trying to change const value
//name = "Dishaa"; //Error: Assignment to constant variable.
age = 20;
state = "Chandigarh";
course = "BTech";
console.table([age, state, course,name,city]); //in tabular from
//city will show as undefined as it is declared but not assigned a value

/*
let vs var-
var is not preferred bcz it causes issues in block and functional scope
let is used in mordern Js
*/
