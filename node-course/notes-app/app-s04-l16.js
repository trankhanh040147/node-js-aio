// Section 04 Lesson 16: Agruments Parsing with Yargs Part I

import chalk from 'chalk'   
import validator from 'validator'

import substract from './utils.js';
import msg from './notes.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

//Customize yargs version
yargs(hideBin(process.argv)).version('1.1.0')
const argv = yargs(hideBin(process.argv));

argv.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },  
    handler: function (argv) {
        // console.log('adding a new note');
        console.log('Title: ' + argv.title);
        console.log('Body: ', argv.body);
    }
});

argv.command({
    command: 'remove',
    handler: function () {
        console.log('Remove a note');
    }
});

argv.parse();