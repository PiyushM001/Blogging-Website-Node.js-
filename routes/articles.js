const express=require('express')
const mongoose=require('mongoose')
const Articles=require('./../models/schema')
const router=express.Router()

router.get('/new',(req,res)=>{
    res.render('articles/new')
})

router.get('/edit/:id', async (req, res) => {
    const article = await Articles.findById(req.params.id)
    res.render('articles/edit', { article: article })
  })
  
router.get('/:id',async(req,res)=>{
    const article= await Articles.findById(req.params.id)
    if(article==null)res.redirect('/')
    res.render('articles/show',{ article: article })
})



router.post("/",async(req,res)=>{
    
const article=new Articles({
title:req.body.title,
description:req.body.description,
markdown:req.body.markdown,
})
try{
 await article.save();
res.redirect (`/articles/${article.id}`)
}
catch(error){
    res.render('articles/new',{article:article})
}
});




module.exports=router