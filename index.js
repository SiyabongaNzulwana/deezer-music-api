const express = require('express')
const app = express()
const helmet = require("helmet")

const authenticate = require('./src/middleware/authentication')
const authorize = require('./src/middleware/authorization')
const tracks = require('./src/routes/track')
const artist = require('./src/routes/artist')
const albums = require('./src/routes/album')


app.use(helmet())
app.use(authenticate)
app.use(authorize)
app.use(express.json())
app.use(express.static('public'))

app.use('/api/tracks/', tracks)
app.use('/api/artist/', artist)
app.use('/api/albums/', albums)

app.get('/', (req, res) => {
  res.send(`Hello World!`)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
