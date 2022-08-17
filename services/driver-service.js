const BaseService = require('./base-service');
const Driver = require('../driver');

class DriverService extends BaseService {
  async findByDriverName(name) {
    return this.findBy('name', name);
  }

  async findByLocation(location) {
    return this.findBy('location', location);
  }
}

module.exports = new DriverService(Driver);
