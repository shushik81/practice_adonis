const Base = require('./Base');

class Attribute extends Base {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }
}

module.exports = Attribute;
