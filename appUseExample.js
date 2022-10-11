let express=require('express');
let app=express()
//app use function
app.use(function(req,res,next){
    console.log('welcome to the courses')
    next()
})

app.get('/courses/api',function(req,res){
    res.send('first course')
})
app.get('/courses/js',function(req,res){
    res.send('second course')
})
app.listen(3000)