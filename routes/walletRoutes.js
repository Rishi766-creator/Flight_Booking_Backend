const express=require("express");
const router=express.Router();
const Wallet=require("../models/Wallet");
router.get("/balance",async(req,res)=>{
    const wallet=await Wallet.findOne();
    res.json({balance:wallet.balance});
});
module.exports=router;