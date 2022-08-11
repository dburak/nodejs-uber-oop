const fs = require("fs");
const flatted = require("flatted"); // for circular json structure

class BaseDatabase {
  constructor(model) {
    this.model = model;
    this.filename = model.name;
  }

  save(objects) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        `${this.filename}.json`,
        flatted.stringify(objects, null, 2),
        (err) => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  }

  load() {
    return new Promise((resolve, reject) => {
      fs.readFile(`${this.filename}.json`, "utf8", (err, file) => {
        if (err) return reject(err);

        const objects = flatted.parse(file);

        resolve(objects.map(this.model.create));
      });
    });
  }

  async insert(object) {
    const objects = await this.load();
    return this.save(objects.concat(object));
  }

  remove(index) {
    const objects = this.load();

    objects.splice(index, 1);
    this.save(objects);
  }

  update(object) {
    const objects = this.load();

    const index = objects.findIndex((o) => o.id == object.id);

    if (index == -1)
      throw new Error(
        `Cannot find ${this.model.name} instance with id ${object.id}`
      );

    objects.splice(index, 1, object);
    this.save(objects);
  }

  async find(id) {
    const objects = await this.load();
    return objects.find((o) => o.id == id);
  }

  async findBy(property, value) {
    return (await this.load()).find((o) => o[property] == value);
  }
}

module.exports = BaseDatabase;
