 // Monday, December 4th 2017 

//  let employees = [
//   {name: 'Bob', department: 'sales', title: 'sales manager'},
//   {name: 'Tina', department: 'finance', title: 'director of finance'},
//   {name: 'Randy', department: 'IT', title: 'hardware guy'},
//   {name: 'Glenda', department: 'C-suite', title: 'CEO'}
// ]

// for (let i = 0; i < employees.length; i++) {
//   console.log(`${employees[i].name}'s job title is ${employees[i].title}.`);
// }

////////////////////////////////

// Tuesday, December 5th 2017 

/* Instructions: 
    Lightning exercise for Tues, 12/5:
    Make an object with at least three properties. One property should be a method
    Create a new object that links to the first object.
    Give the new object two properties of its own
    In the console, call .hasOwnProperty() on the new object, passing in an inherited property as an argument. Does it return true or false?
    Do it again, but this time pass in one of the properties you added to the new object. True or false?
*/

// let lightningObj = {
//   firstName: "Sarah",
//   lastName: "Morris",
//   age: 25,
//   fullName: function() {
//     age.toString;
//   }
// }

// let newObj = {
//   get lightningObj() {
//     return this.lastName;
//   },
//   color = "Red",
//   number = 9
// }

// console.log(lightningObj.hasOwnProperty(firstName));



///////////////////////////////

// Wednesday, December 6th 2017 

/* Instructions: 
  Loop over every item in this array [45, “I”, true, null, “am”, 3.56, “a”, undefined, { catchphrase: “Oh hai, Mark”}, “JS”, “rockstar”]  and return a new array that contains only strings. and log out the result.
*/



// let strArr = [45, 'I', true, null, 'am', 3.56, 'a', undefined, {catchphrase: 'Oh hai, Mark'}, 'JS', 'rockstar'].filter( (item) => {
//   return typeof(item) === "string";
// });

// console.log('string array', strArr);


//////////////////////////////

// Thursday January 4, 2018

/* Instructions
 Choose a loop method of your choice to get this result from this array:
    let nums = [1, 2, 3, 4, "5", 6, "7"]
    expected result: [3, 5, 7, 9, 11, 13]
*/

let nums = [1, 2, 3, 4, "5", 6, "7"]
// original array given to us
let result = [];
// created new array for results to go in

for (let i = 0; i < nums.length-1; i++) { //did the ' -1' so that we only end up with 6 results instead of 7
  result.push(+nums[i] + +nums[i + 1]); // .push is adding things to the empty array, and the + makes everything in 'nums' a number instead of a string
}

console.log(result);


