/*jshint esversion: 6 */

const fs = require('fs'),
  _ = require('lodash'),
  yargs = require('yargs'), // a parsing tool

  // My modules below...
  notes = require('./notes.js');

// Yargs gives us much more parsing power than working with process.argv directly
const argv = yargs.argv;
let command = argv._[0]; // same result as below, but using yargs not process
//let command = process.argv[2];

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created.');
    notes.logNote(note);
  } else {
      console.log('That title already exists.');
  }

} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found.');
    notes.logNote(note);
  } else {
      console.log('That title doesn\'t exist.');
  }

} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title); // returns t or f, from notes.js
  // Ternary operator = expression ? truthy message : falsey message
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);

} else {
  console.log('Command not recognized');
}
