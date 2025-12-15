const PDFDocument=require("pdfkit");
const fs=require("fs");
const path=require("path");
const generateTicketPDF=(booking)=>{
    return new Promise((resolve,reject)=>{
    const ticketsDir=path.join(__dirname,"../tickets");
    if(!fs.existsSync(ticketsDir)){
        fs.mkdirSync(ticketsDir);
        
    }
    const filePath=path.join(ticketsDir,`ticket-${booking.pnr}.pdf`);
    const doc=new PDFDocument();
        const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);
    doc.fontSize(20).text("FlightTicket",{align:"center"});
    doc.moveDown();
    doc.fontSize(12).text(`Passenger Name:${booking.passenger_name}`);
    doc.text(`Passenger Age:${booking.passenger_age}`);
    doc.text(`Airline:${booking.airline}`);
    doc.text(`Route:${booking.departure_city}->${booking.arrival_city}`);
    doc.text(`Amount Paid:${booking.amount_paid} Rs`);
    doc.text(`PNR:${booking.pnr}`);
    doc.text(`Booking Date: ${booking.bookedAt}`);
    doc.end();
    
    stream.on("finish", () => {
      resolve(filePath); 
    });

    stream.on("error", reject);
    });

}
module.exports=generateTicketPDF;