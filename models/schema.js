const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    title:String,
    description:String,
    markdown:String,
     createdat:{
        type:Date,
        default:Date.now
    }
})

const Articles=mongoose.model('Articles',userschema);


module.exports=mongoose.model('Articles ',userschema)