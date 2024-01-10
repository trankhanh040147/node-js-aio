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
    handler: function () {
        console.log('adding a new note');
    }
});

argv.command({
    command: 'Remove',
    handler: function () {
        console.log('Remove a note');
    }
});

argv.parse();