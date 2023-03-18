const express=require('express')
const articleRouter=require('./routes/articles')
const mongoose=require('mongoose')
const Articles=require('./models/schema')
const app=express()
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/articles',articleRouter)



const db_link='mongodb+srv://jarvis:rBzQmcROFNKcf4mN@cluster0.vjbqbd5.mongodb.net/test';


mongoose.connect(db_link).then(function(db){
    
   
    console.log('database connected successfully');
})
.catch(function(err){
    console.log(err);
});

app.get('/',async(req,res)=>{
   const art= await Articles.find().sort({ createdat: 'desc' })
    res.render('articles/index',{articles: art})
    
})



app.listen(5000,()=>{
    console.log("server is listning on port 5000");
})