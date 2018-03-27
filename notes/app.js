console.log('starting app');

const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

let command = process.argv[2];

const argv = yargs.argv;

console.log('Process: ', argv);

console.log(`Command: ${command}`);

if (command === 'add') {
  // add new note
  console.log('Adding new note');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  // list notes
  console.log('Listing all notes');
} else {
  console.log('command not recognized');
}
