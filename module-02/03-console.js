const util = require('util')

console.log(global.process.mainModule)

//console.log(util.inspect(global.process.mainModule, { showHidden: true, depth: null, colors: true }))
//console.dir(global.process.mainModule, { showHidden: true, depth: null, colors: true })

util.inspect.defaultOptions.depth = null;
util.inspect.defaultOptions.showHidden = true;
util.inspect.defaultOptions.colors = true;

console.log(global.process.mainModule)

//console.log(0xff);

//===============================

const fs = require('fs')

const stdout = fs.createWriteStream('./stdout.log')
const stderr = fs.createWriteStream('./stderr.log')

const flag = 'Time of execution'

// Declare new instance of console
const log = new console.Console(stdout, stderr)

// Start the time counter with the flag
log.time(flag)

// Throw an error case the first parameter is false
log.assert(0 !== 1, "Warning! Zero isn't equal to one")

// console.log() === console.info()

// Log the message to stderr or the stack trace case is passed an error
log.warn(new Error('Warning thrown'))
log.error(new Error('Error thrown'))

// Show the stack trace for the new instance of console
log.trace('Trace')

// Log the time elapsed with the flag
log.timeEnd(flag)
