const Flight=require('../models/Flight');
const Booking=require('../models/Booking');
const {applySurgePricing}=require('./pricingController');
const generateTicketPDF = require("../utils/generateTicketPDF");
const {deductFromWallet}=require('./walletController');
const { v4: uuidv4 } = require("uuid");

const bookFlight=async (req,res)=>{
    try{
    console.log("REQ BODY 👉", req.body);
console.log("REQ HEADERS 👉", req.headers.authorization);

    const {flight_id,passenger_name,passenger_age} = req.body;
    const finalPrice=await applySurgePricing(flight_id);
    await deductFromWallet(finalPrice);
    const flight=await Flight.findOne({flight_id});
    const booking=await Booking.create({
        passenger_name,
        passenger_age,
        flight_id,
        airline:flight.airline,
        departure_city:flight.departure_city,
        arrival_city:flight.arrival_city,
        amount_paid:finalPrice,
        pnr:uuidv4().slice(0,8).toUpperCase()
    });
    const pdfPath=await generateTicketPDF(booking);
    res.status(201).json({
      success: true,
      pnr: booking.pnr
    });

    
    
    }catch(err){
        res.status(400).json({error:err.message});
    }

};
const getBookingHistory=async(req,res)=>{
    try{
        const bookings=await Booking.find().sort({bookedAt:-1});
        res.json({bookings});
    }
    catch(err){
        res.status(500).json({error:"Failed to fetch booking history"});
    }
}
module.exports={bookFlight,getBookingHistory};

