/*jshint esversion: 6 */


console.log('Starting app.js');

// Node's built-in modules - https://nodejs.org/api/

const fs = require('fs'),
  os = require('os'),
  _ = require('lodash'),
  notes = require('./notes.js');

// _.uniq is a lo-dash utility that strips out the dups in an array
let filteredArray = _.uniq(['Dennis', 45, 'Capt. Willard', 'Dennis', 78, 45]);
console.log(filteredArray);

// console.log(_.isString(true)); // _.isString is a lo-dash method
// console.log(_.isString('Heel it now, dig?'));

// console.log('Result:', notes.add(2,37));

// let res = notes.addNote();
// console.log(res);

let user = os.userInfo();
// console.log(user);

// Using an ES6 template string instead of 'Hello ' + etc + '!'
fs.appendFileSync('greetings.txt', `Hello ${user.username}\n`);
