const Model = use('Model');

class Product extends Model {
  static boot() {
    super.boot();
    this.addTrait('Repository');
  }

  attributes() {
    return this.belongsToMany('App/Models/Attribute').pivotModel('App/Models/ProductAttribute');
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Product;
