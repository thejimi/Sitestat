const express = require('express')
const app = express()
const port = 3000

const sitestat = require('../index.js')

const S_Config = []

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    sitestat.handle(req, res, S_Config)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})