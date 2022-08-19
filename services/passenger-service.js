const BaseService = require('./base-service');
const Passenger = require('../passenger');

class PassengerService extends BaseService {
  async findByName(name) {
    return this.findBy('name', name);
  }
}

module.exports = new PassengerService(Passenger);
