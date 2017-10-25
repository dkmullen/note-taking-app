/*jshint esversion: 6 */
console.log('Starting notes.js');

const fs = require('fs'); // fs is built-in to node

// module is a variable available in node js. One of its properties is exports
// see it with console.log(module);

let addNote = (title, body) => {
  let notes = []; // set an array of note objects
  let note = { // set a note object
    title,
    body
  };

  // try / catch because our file may not exist on the first try
  try {
    // Grab the existing file of notes...
    let notesString = fs.readFileSync('notes-data.json');
    // ...and parse it into an object
    notes = JSON.parse(notesString);
  } catch(e) {
    // No need to write catch instructions, just define the block
  }

  // Make an array of notes with the same title, if any
  let duplicateNotes = notes.filter((note) => note.title === title);

  // The above is the same as this.
  // let duplicateNotes = notes.filter((note) => {
  //   return note.title === title; // return notes with a dup title
  // });

  if (duplicateNotes.length === 0) {
    notes.push(note); // add the note to the notes array
    // write to file as a JSON object, create the file if needed
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
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
