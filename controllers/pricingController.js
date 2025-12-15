const BookingAttempt = require("../models/BookingAttempt");
const Flight = require("../models/Flight");

const applySurgePricing = async (flight_id) => {
  const flight = await Flight.findOne({ flight_id });
  if (!flight) throw new Error("Flight not found");

  const now = new Date();
  let attempt = await BookingAttempt.findOne({ flight_id });

  if (!attempt) {
    attempt = await BookingAttempt.create({
      flight_id,
      attempts: 1,
      firstAttemptAt: now
    });
    return flight.base_price;
  }

  const minutesSinceFirst =
    (now - attempt.firstAttemptAt) / (1000 * 60);

  if (minutesSinceFirst > 10) {
    attempt.attempts = 1;
    attempt.firstAttemptAt = now;
    flight.current_price = flight.base_price;
    flight.lastSurgeAt = null;

    await attempt.save();
    await flight.save();

    return flight.base_price;
  }

  
  attempt.attempts += 1;
  await attempt.save();

  
  if (
    attempt.attempts >= 3 &&
    !flight.lastSurgeAt
  ) {
    flight.current_price = Math.round(flight.base_price * 1.1);
    flight.lastSurgeAt = now;
    await flight.save();
  }

  return flight.current_price;
};

module.exports = { applySurgePricing };
