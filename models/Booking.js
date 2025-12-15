const mongoose=require("mongoose");
const bookingSchema=new mongoose.Schema({
    passenger_name:String,
    passenger_age:Number,
    flight_id:String,
    airline:String,
    departure_city:String,
    arrival_city:String,
    amount_paid:Number,
    pnr:String,
    bookedAt:{
        type:Date,
        default:Date.now
    }

});
module.exports=mongoose.model("Booking",bookingSchema);