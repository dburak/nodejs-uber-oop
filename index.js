const Passenger = require("./passenger");
const Driver = require("./driver");

const burak = new Passenger("Burak", "Bahçeli 7.cadde");
const ahmet = new Driver("Ahmet", "Milli Kütüphane");

burak.book(ahmet, "Bahçeli 7.cadde", "Armada AVM");
burak.book(ahmet, "Armada AVM", "Kentpark AVM");
burak.book(ahmet, "Kentpark AVM", "Bahçeli 7.cadde");

function printBooking(booking) {
  console.log(
    `${booking.passenger.name} booked to ${booking.driver.name} to travel from ${booking.origin} to ${booking.destination}`
  );
}

function printBookingHistory(passenger) {
  passenger.bookings.forEach(printBooking);
}

printBookingHistory(burak);
