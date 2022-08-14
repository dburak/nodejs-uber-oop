const { v4: uuidv4 } = require('uuid');

class Driver {
    constructor(id = uuidv4(), name, location) {
      this.id = id;
  
      this.name = name;
      this.location = location;
      
  }

  static create({id, name, location }) {
    return new Driver(id, name, location);
  }
}

module.exports = Driver;
