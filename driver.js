
class Driver {
  constructor(id, name, location) {
    this.id = id;
    this.name = name;
    this.location = location;
  }

  static create({id, name, location }) {
    return new Driver(id, name, location);
  }
}

module.exports = Driver;
