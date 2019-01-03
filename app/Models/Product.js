const Model = use('Model');

class Product extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }

  type() {
    return this.belongsTo('App/Models/Type');
  }

  productAttributes() {
    return this.hasMany('App/Models/ProductAttribute');
  }

  attributes() {
    return this.belongsToMany('App/Models/Attribute').pivotModel('App/Models/ProductAttribute');
  }

  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }
}

module.exports = Product;
