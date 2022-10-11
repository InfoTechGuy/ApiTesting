let express = require('express')
let app = express()

// app.get('/',function(req,res){
//     res.send('response sent')
// })

// app.get('/',function(req,res){
//     res.send({some:'json'})
// })

// app.get('/',function(req,res){
//          res.send('<h1>some html</h1>')
//     })
app.get('/',function(req,res){
        res.send([1,2,3])
     })
app.listen(3000)