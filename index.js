const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(function (req, res) {
    console.log('a request arrived')
    const data = req.body || req.query
    console.log(data)
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(data, null, 2))
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})