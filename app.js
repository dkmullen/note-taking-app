/*jshint esversion: 6 */

console.log('Starting app.js');

const fs = require('fs'),
  _ = require('lodash'),
  // My modules below...
  notes = require('./notes.js');

let command = process.argv[2];

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading a note');
} else if (command === 'remove') {
  console.log('Removing a note');
} else {
  console.log('Command not recognized');
}
 console.log(process.argv[3]);
