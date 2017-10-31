/*jshint esversion: 6 */

var person = {
  name: 'Dennis'
};

person.age = 53;

debugger; // Tells node's CL debugging tool to stop here

person.name = 'DKM';

console.log(person);

/* Run node in debug mode: node inspect file.js
   Commands:
    n - runs thru the file a command at a time
    list[10] - lists 10 lines before/after current command to show context
    c- continue through to end of the file OR to debugger command in file;
    repl - enter a mode where you can interact with JS (stands for Read, Evalualte, Print, Loop)

    run debug with node inspect app.js read --title="whatevs" (or use nodemon)
    Also, need Node -v 8+ for inspect to work

  OR, to run in Chrome dev tools:
    nodemon --inspect-brk filename.js (or node)
    And in Chrome, go to chrome://inspect and click 'Open dedicated DevTools for Node'
    Just click a line number to create a debugger break, on the fly
    ESC opens and closes the console

*/
