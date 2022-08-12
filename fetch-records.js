const Passenger = require('./passenger');
const Driver = require('./driver');
const { passengerDatabase, driverDatabase } = require('./database');
const { v4: uuidv4 } = require('uuid');
const printBookingHistory = require('./lib/print-booking-history');

const burak = Passenger.create({
  name: 'Burak',
  location: 'Bilkent',
});

const ahmet = Driver.create({
  name: 'Ahmet',
  location: 'Bilkent',
});

burak.book(ahmet, 'Bahçeli 7.cadde', 'Armada AVM');
burak.book(ahmet, 'Armada AVM', 'Kentpark AVM');
burak.book(ahmet, 'Kentpark AVM', 'Bahçeli 7.cadde');

async function main() {
  try {
    await passengerDatabase.save([burak]);

    await driverDatabase.save([ahmet]);

    const aslı = Passenger.create({
      name: 'Aslı',
      location: 'Bilkent',
    });

    await passengerDatabase.insert(aslı);
    const passengers = await passengerDatabase.load();
    passengers.forEach(printBookingHistory);

    console.log(await passengerDatabase.findBy('location', 'Bilkent'));
  } catch (e) {
    return console.log(e);
  }
}

main();
