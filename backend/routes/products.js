const express=require('express');
const connection=require('../connection');
const router=express.Router(); 
router.post('/new_product',(req,res)=>{
    let user =req.body;
    query="select * from products where user=?"
    connection.query(query,[products.user],(err,_results)=>{
    if(!err){
        if(_results.length<=0){
            query="insert into barbershop2.products(name,summary,average_rating,genre) values('kjoo','kalb','4','harstyle')"
            connection.query(query,[products.name,products.summary,products.average_rating,products.genre],(_err,_results)=>{
                if(!err){
                    return res.status(200).json({message:'Successfully Registered'});
                }
                else{
                    return res.status(500).json(err);
                }
            })
        }
        else{
            return res.status(400).json({message:"Product already exist!"});
        }
    }else{
        return res.status(500).json(err);
    }
});
})
module.exports=router;