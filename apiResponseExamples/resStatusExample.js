let express = require('express')
let app = express()
//dummy program to demonstrate status for the website
//like 200 300 400 500
res.status(403).end()
res.status(400).send('bad request')
res.status(404).send('sorry page not available')

app.listen(3000)