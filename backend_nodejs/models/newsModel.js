import mongoose from "mongoose";
 
const newsSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:String,
    image:String,
    category:String,
    author:String,
    readTime:String,
    content:String,
    date:String
},{timestamps:true})

const News = mongoose.model("News", newsSchema);

export default News;
