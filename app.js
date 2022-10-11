//npm init -y to initalize the folder with npm
//npm i express to install express libary 
//node app.js to trigger the connection
let express=require('express');
let app=express()
//use insomania to test the api connection
//courses array
let courses=[
    {id:0,title:'API'},
    {id:1,title:'Javascript'}
];
//nice
let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
//get function
app.get('/',function(req,res){
    res.json(courses);
});
//post function
app.post('/',function(req,res){
    let newCourse={
        id: req.body.id,
        title: req.body.title
    };
    courses.push(newCourse);
    res.json(courses)
})
//put function to modify by id
app.put('/:id',function(req,res){
let found=courses.find(function(item){
    return item.id ===parseInt(req.params.id)
})
if(found){
    let update={
        id:found.id,
        title:req.body.title
    }
    let targetIndex=courses.indexOf(found)
    courses.splice(targetIndex,1,update)
    res.send(courses)    
}else{
    res.sendStatus(404)
}
})
//delete function to delete by id
app.delete('/:id',function(req,res){
    let found= courses.find(function(item){
        return item.id === parseInt(req.params.id)
    })
    if(found){
        let targetIndex=courses.indexOf(found)
        courses.splice(targetIndex,1)
        res.send(courses)
    }else{
        res.sendStatus(404)
    }
})
//connection by id, if there is error ask stack overflow
app.listen(3000)