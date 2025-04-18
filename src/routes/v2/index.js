import express,{Router} from "express";

const v2Router = Router();

v2Router.get('/info',(req,res)=>{
    res.json({message:'This is v2 info page'});
})

export default v2Router;
