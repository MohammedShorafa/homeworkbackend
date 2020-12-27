const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// write your code 
app.get('/user',(req,res)=>{
    res.json({massge: "Welcome ", name:req.query.name});
})


app.post('/user/mohammed',(req,res)=>{
    res.json({ message:req.body.massage ,name:req.body.name });
    
})
app.get('/user/mohammed',(req,res)=>{
    res.json({massge: "Welcome"});
})
app.listen(3000,()=>{
    console.log('server running portNo.3000'); 
 });