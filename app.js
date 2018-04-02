console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs'); 

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv)

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (_.isUndefined(note) === true) {
        console.log('Note title already exists, did not add');
    } else {
        console.log(`Note added successfully as: ${note.title} with the contents: ${note.body}`);
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (_.isUndefined(note) === true) {
        console.log(`No note called "${argv.title}" exists`);
    } else {
        console.log(`Note contents of "${note.title}"`);
        console.log('---');
        console.log(`${note.body}`);
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}