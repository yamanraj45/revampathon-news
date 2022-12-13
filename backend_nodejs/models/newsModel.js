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
    readTime:Number,
    content:String
},{timestamps:true})

const News = mongoose.model("News", newsSchema);

export default News;
