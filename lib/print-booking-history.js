function printBooking(booking) {
  console.log(
    `${booking.passenger.name} booked to ${booking.driver.name} to travel from ${booking.origin} to ${booking.destination}`
  );
}

function printBookingHistory(passenger) {
  if (passenger.bookings.length == 0) {
    return console.log(`${passenger.name} has no bookings yet`);
  }
  passenger.bookings.forEach(printBooking);
}

module.exports = printBookingHistory;
