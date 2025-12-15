const mongoose=require("mongoose");
const flightModel=new mongoose .Schema({
    flight_id:{type:String,required:true,unique:true},
    airline:{type:String,required:true},
    departure_city:{type:String,required:true},
    arrival_city:{type:String,required:true},
    base_price:{type:Number,required:true},
    current_price:{type:Number,required:true},
    lastSurgeAt:{type:Date,default:null},

},{timestamps:true});
module.exports=mongoose.model("Flight",flightModel);