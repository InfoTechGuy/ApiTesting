let express = require('express')
let app = express()
//requireAuthentication is dummy example
app.all('*',requireAuthentication)
app.all('/grades/*',requireAuthentication)
app.listen(3000)