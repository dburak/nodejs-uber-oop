const Passenger = require("./passenger");
const Driver = require("./driver");
const { passengerDatabase, driverDatabase } = require("./database");
const { v4: uuidv4 } = require("uuid");
const printBookingHistory = require("./lib/print-booking-history");

const burak = new Passenger(uuidv4(), "Burak", "Bahçeli 7.cadde");
const ahmet = new Driver(uuidv4(), "Ahmet", "Milli Kütüphane");

burak.book(ahmet, "Bahçeli 7.cadde", "Armada AVM");
burak.book(ahmet, "Armada AVM", "Kentpark AVM");
burak.book(ahmet, "Kentpark AVM", "Bahçeli 7.cadde");

async function main() {
  try {
    await passengerDatabase.save([burak])

    await driverDatabase.save([ahmet])

    const aslı = Passenger.create({id: uuidv4(), name: 'Aslı', location: 'Bilkent' })

    await passengerDatabase.insert(aslı)
    const passengers = await passengerDatabase.load()
    passengers.forEach(printBookingHistory)
  } catch (e) {
    return console.log(e)
  }
}

main()