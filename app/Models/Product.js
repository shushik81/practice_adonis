const Base = require('./Base');

class Product extends Base {
  attributes() {
    return this.belongsToMany('App/Models/Attribute')
      .pivotModel('App/Models/ProductAttribute')
      .withPivot('value');
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Product;
