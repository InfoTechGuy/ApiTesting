let express = require('express')
let app = express()

app.get('/:name',function(req,res){
    res.send('your name is: '+req.params.name)
})

app.listen(3000)