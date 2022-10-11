let express = require('express')
let app = express()

app.get('/courses',function(req,res){
    res.redirect('/courses/express')
})
app.get('/courses/express',function(req,res){
    res.send('Welcome to EXPRESS course')
})

app.listen(3000)