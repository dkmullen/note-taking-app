/*jshint esversion: 6 */
console.log('Starting notes.js');

// module is a variable available in node js. One of its properties is exports
// see it with console.log(module);

module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};
