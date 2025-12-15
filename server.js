const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require('dotenv').config();
const flightRoutes=require("./routes/flightRoutes");
const Wallet=require("./models/Wallet");
const bookingRoutes=require("./routes/bookingRoute");
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }
    catch(err){
        console.log(err);
    }
}
connectDB();
const initWallet=async ()=>{
    const wallet=await Wallet.findOne();
    if(!wallet){
        await Wallet.create({balance:50000});
        console.log("Wallet initialized with 50000");
    }
}
initWallet();
app.use('/api',flightRoutes);
app.use('/api/bookings',bookingRoutes);
app.use("/api/wallet", require("./routes/walletRoutes"));
app.use("/api/auth",require("./routes/authRoutes"));
app.listen(5000,()=>{console.log("server connected")});