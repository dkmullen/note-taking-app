/*jshint esversion: 6 */
console.log('Starting notes.js');

// module is a variable available in node js. One of its properties is exports
// see it with console.log(module);

let addNote = (title, body) => {
  console.log('Adding note', title, body);
};
let getAll = () => {
  console.log('Getting all notes');
};
let getNote = (title) => {
  console.log(`Getting ${title}`);
};
let removeNote = (title) => {
  console.log(`Removing ${title}`);
};

module.exports = {
  addNote, // ES5 equivilent is addNote: addNote
  getAll,
  getNote,
  removeNote
};
