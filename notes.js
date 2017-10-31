/*jshint esversion: 6 */
console.log('Starting notes.js');

const fs = require('fs'); // fs is built-in to node

let fetchNotes = () => {
  // try / catch because our file may not exist on the first try
  try {
    // Grab the existing file of notes...
    let notesString = fs.readFileSync('notes-data.json');
    // ...and parse it into an object
    return JSON.parse(notesString);
  } catch(e) {
    // No requirement to write catch instructions, just define the block
    return [];
  }
};

let saveNotes = (notes) => {
  // write to file as a JSON object, create the file if needed
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes(); // set an array of note objects
  let note = { // set a note object
    title,
    body
  };

  // Make an array of notes with the same title, if any
  let duplicateNotes = notes.filter((note) => note.title === title);

  // The above is the same as this.
  // let duplicateNotes = notes.filter((note) => {
  //   return note.title === title; // return notes with a dup title
  // });

  if (duplicateNotes.length === 0) {
    notes.push(note); // add the note to the notes array
    saveNotes(notes);
    return note;
  }
};

let getAll = () => {
  console.log('Getting all notes');
};

let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

let removeNote = (title) => {
  let notes = fetchNotes();
  // Make a new array that excludes the title we specified
  let filteredNotes = notes.filter((note) => note.title !== title);
  // Save the new array with the specified note filtered out
  saveNotes(filteredNotes);
  // Below returns true if lengths aren't =, indicating a note was removed
  return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
  console.log('-----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

// module is a variable available in node js. One of its properties is exports
// see it with console.log(module);
module.exports = {
  addNote, // ES5 equivilent is addNote: addNote
  getAll,
  getNote,
  removeNote,
  logNote
};
