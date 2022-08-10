const Passenger = require("./passenger");
const Driver = require("./driver");
const {passengerDatabase, driverDatabase} = require('./database')
const { v4: uuidv4 } = require('uuid');

// const burak = new Passenger(uuidv4(), "Burak", "Bahçeli 7.cadde");
const ahmet = new Driver(uuidv4(), "Ahmet", "Milli Kütüphane");

// burak.book(ahmet, "Bahçeli 7.cadde", "Armada AVM");
// burak.book(ahmet, "Armada AVM", "Kentpark AVM");
// burak.book(ahmet, "Kentpark AVM", "Bahçeli 7.cadde");

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

// passengerDatabase.save([burak]);

const foundName = passengerDatabase.findByName("Burak");

foundName.book(ahmet, "Bilkent", "ODTU");

passengerDatabase.update(foundName);


printBookingHistory(foundName);




// passengers.forEach((p) => console.log(p.name));
