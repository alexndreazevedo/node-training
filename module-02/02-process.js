// Get the environment variables
console.log(process.env.OS)

// Events on process object
process.on('exit', (code) => {

  console.log(`About to exit with code: ${code}`)

})

// Get arguments of CLI
process.argv.forEach((val, index) => {

  console.log(`${index}: ${val}`)

})

// Explain process management
console.log(process.pid, process.platform, process.arch, process.release)
//process.kill(process.pid)

console.log(process.versions)

// Explain process.nextTick() for callbacks

// Exit the process
process.exit(127)
