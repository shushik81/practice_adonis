const Model = use('Model');

class Product extends Model {
  productAttributes() {
    return this.hasMany('App/Models/ProductAttribute');
  }

  attributes() {
    return this.belongsToMany('App/Models/Attribute').pivotModel('App/Models/ProductAttribute');
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Product;
