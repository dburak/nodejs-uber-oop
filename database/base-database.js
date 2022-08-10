const fs = require("fs");
const flatted = require("flatted"); // for circular json structure

class BaseDatabase {
  constructor(model) {
    this.model = model;
    this.filename = model.name;
  }
  save(objects) {
    fs.writeFileSync(`./${this.filename}.json`, flatted.stringify(objects));
  }

  load() {
    const file = fs.readFileSync(`./${this.filename}.json`, "utf-8");
    const objects = flatted.parse(file);

    return objects.map(this.model.create);
  }

  insert(object) {
    const objects = load();
    this.save(filename, objects.concat(object));
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
}

module.exports = BaseDatabase;
