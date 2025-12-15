const express=require("express");
const authMiddleware=require("../middleware/authMiddleware");
const path=require('path');
const router=express.Router();
const {bookFlight,getBookingHistory}=require("../controllers/bookingController");
router.post("/book",authMiddleware,bookFlight);
router.get('/ticket/:pnr',(req,res)=>{
    const filePath=path.join(__dirname,"../tickets",`ticket-${req.params.pnr}.pdf`);
    res.download(filePath);
})
router.get("/history",authMiddleware,getBookingHistory);
module.exports=router;