import http from 'http'

import app from './app.mjs'


const server = http.createServer(app)

server.listen(5000, ()=> console.log("Je tourne sur le port 5000"))