let express = require('express')
let app = express()

let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.send('your name is:'+req.body.name)
})

app.listen(3000)