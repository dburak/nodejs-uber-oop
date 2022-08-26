const Passenger = require('./passenger');
const Driver = require('./driver');
const { passengerService, driverService } = require('./service');
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
    await passengerService.save([burak]);

    await driverService.save([ahmet]);

    const aslı = Passenger.create({
      name: 'Aslı',
      location: 'Bilkent',
    });

    await passengerService.insert(aslı);
    const passengers = await passengerService.load();
    passengers.forEach(printBookingHistory);

    console.log(await passengerService.findBy('location', 'Bilkent'));
  } catch (e) {
    return console.log(e);
  }
}

main();
