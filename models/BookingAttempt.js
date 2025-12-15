const mongoose=require("mongoose");
const bookingAttemptSchema=new mongoose.Schema({
    flight_id:{
        type:String,
        required:true
    },
    attempts:{
        type:Number,
        default:0
    },
    firstAttemptAt:{
        type:Date,
        default:null
    }

})
module.exports=mongoose.model("BookingAttempt",bookingAttemptSchema);