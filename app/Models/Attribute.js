const Model = use('Model');

class Attribute extends Model {
  static boot() {
    super.boot();
    this.addTrait('Repository');
  }

  type() {
    return this.belongsTo('App/Models/Type');
  }

  products() {
    return this.belongsToMany('App/Models/Product').pivotModel('App/Models/ProductAttribute');
  }

  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }
}

module.exports = Attribute;
