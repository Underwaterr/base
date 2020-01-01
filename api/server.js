let app = require('./middleware/app')

let server = app.listen(process.env.PORT)

server.on('listening', ()=> {
  let timestamp = new Date().toLocaleDateString('en-US', {dateStyle: 'full', timeStyle: 'long'})
  console.log(`Server started at ${timestamp}`)

  let address = server.address()
  console.log(`${address.address}:${address.port}`)
})

server.on('error', error=> {
  console.error("Server error! 😢")
  console.error(error)
})

module.exports = server
