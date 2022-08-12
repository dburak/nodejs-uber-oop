const Booking = require('./booking');
const { v4: uuidv4 } = require('uuid');

class Passenger {
  constructor(id = uuidv4(), name, location, bookings = []) {
    this.id = id;

    this.name = name;
    this.location = location;
    this.bookings = bookings;
  }

  book(driver, origin, destination) {
    const booking = new Booking(driver, this, origin, destination);

    this.bookings.push(booking);

    return booking;
  }

  static create({ id, name, location, bookings }) {
    return new Passenger(id, name, location, bookings);
  }
}

module.exports = Passenger;
