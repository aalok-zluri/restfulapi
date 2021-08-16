const mongoose=require('mongoose');
//schema
const genreSchema=mongoose.Schema({
    name:String,
    create_data:{
        type:Date,
        default:Date.now
    }
});
const Genre=module.exports=mongoose.model('Genre',genreSchema);
module.exports.getGenres=function(callback,limit){
    Genre.find(callback).limit(limit);
} 
module.exports.addtGenres=function(genre,callback){
    Genre.create(genre,callback);
} 
