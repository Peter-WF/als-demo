const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(function (req, res) {
    console.log('a request arrived')
    console.log(req.query)
    console.log(req.body)
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted query:\n')
    res.write(JSON.stringify(req.query, null, 2))
    res.write('you posted body:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})