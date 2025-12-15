const Flight=require('../models/Flight');
const searchFlights=async (req,res)=>{
    try{
    const {from,to}=req.query;
    if(!from||!to){
        return res.status(400).json({success:false,message:"Departure and arrival cities are required"});
    }
    const flights=await Flight.find({
        departure_city:from,
        arrival_city:to
    }).limit(10);
    return res.status(200).json(flights);
    }catch(err){
        console.log(err);
        return res.status(500).json({success:false,message:"Error fething flights"});
    }


}
module.exports={searchFlights};