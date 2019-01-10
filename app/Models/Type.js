const Base = require('./Base');

class Type extends Base {
  attributes() {
    return this.hasMany('App/Models/Attribute');
  }

  products() {
    return this.hasMany('App/Models/Product');
  }

  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }
}

module.exports = Type;
