let express = require('express')
let app = express()

app.disable('trust proxy')
console.log(app.disabled('trust proxy'))

app.listen(3000)