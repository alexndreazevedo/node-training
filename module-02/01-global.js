
console.log('Console =>', global.console === console)
console.log('Process =>', global.process === process)

// Global scope of current module
console.log('Dirname =>', __dirname)
console.log('Filename =>', __filename)

// declared
var _declared = 'foo'
console.log('Declared =>', global._declared)

// undeclared
_undeclared = 'foo'
console.log('Undeclared =>', global._undeclared)

// Built-in objects

// Fundamental objects
console.log(global.Object)
console.log(global.Function)
console.log(global.Boolean)
console.log(global.Error)

// Number and dates
console.log(global.Number)
console.log(global.Math)
console.log(global.Date)

// Text processing
console.log(global.String)
console.log(global.RegExp)

// Collections
console.log(global.Array)
console.log(global.Map)
console.log(global.Set)

// Structured
console.log(global.ArrayBuffer)
console.log(global.JSON)
console.log(global.DataView)