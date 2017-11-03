/*jshint esversion: 6 */

// Statement syntax
const square = (x) => {
  let result = x * x;
  return result;
};

// Expression syntax for an arrow function; After the arrow, simply
// specify what you want to return. Also, with only one arg, you can
// leave off the parens
const square2 = (x) => x * x;
console.log(square(9));

const user = {
  name: 'Dennis',
  sayHi: () => {
    console.log(arguments); // Won't work
    console.log(`Hi,  I'm ${this.name}`); // Won't work
  },
  sayHiAlt () {
    console.log(arguments); // Will work
    console.log(`Hi, I'm ${this.name}`); // will work
  }
};
user.sayHiAlt('DM', 'CM', 'MM');

// Arrow functions do not bind a 'this' keyword, and don't work with the arguments variable
