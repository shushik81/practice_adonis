const Model = use('Model');

class Type extends Model {
  static boot() {
    super.boot();
    this.addTrait('Repository');
  }

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
