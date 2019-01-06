const Model = use('Model');

class Attribute extends Model {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }
}

module.exports = Attribute;
