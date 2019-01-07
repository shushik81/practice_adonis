const Model = use('Model');

class ProductAttribute extends Model {
  attribute() {
    return this.belongsTo('App/Models/Attribute');
  }

  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }
}

module.exports = ProductAttribute;
