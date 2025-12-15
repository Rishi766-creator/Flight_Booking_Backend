const mongoose=require("mongoose");
const Flight=require('../models/Flight');
require('dotenv').config();
const flights=[
    {
        flight_id:"AI101",
        airline:"Air India",
        departure_city:"Delhi",
        arrival_city:"Mumbai",
        base_price:2500
    
    },
     {
    flight_id: "IND202",
    airline: "IndiGo",
    departure_city: "Bangalore",
    arrival_city: "Delhi",
    base_price: 2200
  },
  {
    flight_id: "VST303",
    airline: "Vistara",
    departure_city: "Mumbai",
    arrival_city: "Chennai",
    base_price: 2800
  },
  {
    flight_id: "SP404",
    airline: "SpiceJet",
    departure_city: "Hyderabad",
    arrival_city: "Pune",
    base_price: 2300
  },
  {
    flight_id: "AK505",
    airline: "Akasa Air",
    departure_city: "Ahmedabad",
    arrival_city: "Delhi",
    base_price: 2100
  },
  {
    flight_id: "AI606",
    airline: "Air India",
    departure_city: "Delhi",
    arrival_city: "Kolkata",
    base_price: 2600
  },
  {
    flight_id: "IND707",
    airline: "IndiGo",
    departure_city: "Chennai",
    arrival_city: "Bangalore",
    base_price: 2000
  },
  {
    flight_id: "VST808",
    airline: "Vistara",
    departure_city: "Mumbai",
    arrival_city: "Delhi",
    base_price: 2900
  },
  {
    flight_id: "SP909",
    airline: "SpiceJet",
    departure_city: "Jaipur",
    arrival_city: "Mumbai",
    base_price: 2400
  },
  {
    flight_id: "AK010",
    airline: "Akasa Air",
    departure_city: "Pune",
    arrival_city: "Hyderabad",
    base_price: 2200
  }
];
const seedFlight=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        await Flight.deleteMany();
        const formattedFlights=flights.map(f=>({
            ...f,
            current_price:f.base_price

        }));
        await Flight.insertMany(formattedFlights);
        console.log("Flights seeded successfully");
        process.exit();
    }catch(err){
        console.log(err);
        process.exit(1);
    }

}
seedFlight();