/*jshint esversion: 6 */

// Convert an object to a string
// var obj = {
//   name: 'Dennis'
// };
// var stringObj = JSON.stringify(obj); // JSON.stringify and JSON.parse are plain JS methods
// console.log(typeof stringObj);
// console.log(stringObj);

//Convert a string to an object
// var personString = '{"name": "Dennis", "age": "53"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
console.log(typeof originalNoteString);
console.log(originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log('Type of note:', typeof note);
console.log('Content of note:', note);
console.log('Title of note:', note.title);
