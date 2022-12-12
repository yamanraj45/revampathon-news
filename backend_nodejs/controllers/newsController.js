import News from "../models/newsModel.js";


export default class NewsController{

    //create log
    async createNews(req,res,next){
        try{
            const news = new News(req.body)
            const createdEntry = await news.save();
            res.json(createdEntry)
        }catch(error){
            if(error.name === 'ValidationError'){
                res.status(422);
            }
            next(error);
        }

    }
    async getAllNews(req,res,next){
        try{
            const entries = await News.find();
            res.json(entries)
        }catch(error){
            next(error);
        }
    }
    async getSingleNews(req,res){
        const {id}=req.params;
        try{
            const news = await News.findById(id)
            if(news){
                res.json(news)
            }else{
                res.json({success:false,message:"No data found"})
            }
        }catch(err){
            res.json({success:false,message:"Id not provided"})
                }
    }
    async deleteNews(req,res){
        const {id} = req.params;
        if(id){
            const news = await News.findByIdAndDelete({_id:id});
            if (news) {
                res.json({ success: true, message: "Successfully Deleted" });
              } else {
                res.json({ success: false, message: "Couldn't Delete the news" });
              }
        }else{
            res.json({ success: false, message: "News ID not provided"});
        }
    }

    //update news
    async updateNews(req,res){
        const {id} = req.params;
        if (id) {
            const news = await News.findByIdAndUpdate(id, req.body, {
              new: true,
            });
            if (news) {
              res.json({ success: true, message: "Successfully updated" });
            } else {
              res.json({ success: false, message: "Couldn't update news" });
            }
          } else
            res.json({ success: false, message: "News ID not provided" });
    }

}