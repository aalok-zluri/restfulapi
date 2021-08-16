const express =require('express');
const app =express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
Genre=require('./genres.js');
mongoose.connect('mongodb://localhost/demo');
const db=mongoose.connection;

app.get('/', function(req,res){
    res.send("Hello world");
});
app.get('/genres', function(req,res){
   Genre.getGenres(function(err,genres){
       if(err)
       {
           throw err;

       }
       res.json(genres);
   });
});
   app.post('/genres', function(req,res){
       const genre=req.body;
       db.collection('genres').insertOne(genre);
    Genre.addGenres(genre,function(err,genres){
        if(err)
        {
            throw err;
 
        }
        res.json(genre);
    });
});
app.listen(3000);
console.log('Running on port 3000');