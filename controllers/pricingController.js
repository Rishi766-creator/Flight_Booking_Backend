const BookingAttempt = require("../models/BookingAttempt");
const Flight = require("../models/Flight");

const applySurgePricing = async (flight_id) => {
  const flight = await Flight.findOne({ flight_id });
  if (!flight) {
    throw new Error("Flight not found");
  }

  const now = new Date();
  let attempt = await BookingAttempt.findOne({ flight_id });

  // First attempt
  if (!attempt) {
    attempt = new BookingAttempt({
      flight_id,
      attempts: 1,
      firstAttemptAt: now
    });

    await attempt.save();
    return flight.current_price;
  }

  const minutesPassed =
    (now.getTime() - attempt.firstAttemptAt.getTime()) / (1000 * 60);

  // Reset after 10 minutes
  if (minutesPassed > 10) {
    attempt.attempts = 1;
    attempt.firstAttemptAt = now;

    flight.current_price = flight.base_price;
    flight.lastSurgeAt = null;

    await attempt.save();
    await flight.save();

    return flight.current_price;
  }

  // Increase attempts
  attempt.attempts += 1;
  await attempt.save();

  // Apply surge
  if (attempt.attempts >= 3 && minutesPassed <= 5) {
    flight.current_price = Math.round(flight.base_price * 1.1);
    flight.lastSurgeAt = now;

    await flight.save();
  }

  return flight.current_price;
};

module.exports = { applySurgePricing };
