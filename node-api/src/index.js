const express = require("express");
const server = express()
const router = require('./rotas/routes')


server.use(express.json())
server.use('/api',router)
server.listen(3000)

