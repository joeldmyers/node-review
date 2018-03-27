console.log('starting app');

const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');

let command = process.argv[2];

console.log(`Command: ${command}`);

if (command === 'add') {
  // add new note
  console.log('Adding new note');
} else if (command === 'list') {
  // list notes
  console.log('Listing all notes');
} else {
  console.log('command not recognized');
}
