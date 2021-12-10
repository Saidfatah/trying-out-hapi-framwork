// Set environment configuration before importing.
require('dotenv').config();

import routes from './init/routes'
import connection from './init/connection'



(async ()=>{
  const server= await connection() //initialize connection and server
  routes(server) // initialize routes

  await server.start()
  console.log('Server running on %s', server.info.uri)
})()
