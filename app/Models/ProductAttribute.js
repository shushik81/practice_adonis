const Model = use('Model');

class ProductAttribute extends Model {
  product() {
    return this.belongsTo('App/Models/Product');
  }

  attribute() {
    return this.belongsTo('App/Models/Attribute');
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = ProductAttribute;
