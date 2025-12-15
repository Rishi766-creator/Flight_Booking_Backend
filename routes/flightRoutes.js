const express=require("express");
const router=express.Router();
const {searchFlights}=require("../controllers/flightController");
console.log(searchFlights);

router.get('/flights/search',searchFlights)
module.exports=router;