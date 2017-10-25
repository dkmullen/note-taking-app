/*jshint esversion: 6 */

console.log('Starting app.js');

const fs = require('fs'),
  _ = require('lodash'),
  yargs = require('yargs'), // a parsing tool

  // My modules below...
  notes = require('./notes.js');

// Yargs gives us much more parsing power than working with process.argv directly
const argv = yargs.argv;
let command = argv._[0]; // same result as below, but using yargs not process
//let command = process.argv[2];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
