import db from './database'
import Hapi from '@hapi/hapi'

export default async ()=>{
// Create a server with a host and port
  const server = Hapi.server({
  host: process.env.SERVER_HOST || '0.0.0.0',
  port: process.env.SERVER_PORT || '8000',
  routes: { cors: true }, // So that localhost from different ports can connect.
  debug: { request: ['error'] } // Always log errors.
  })
  await db()
  return server
}