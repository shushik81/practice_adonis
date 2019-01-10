const Model = use('Model');

class Base extends Model {
  static boot() {
    super.boot();
    this.addTrait('Repository');
  }
}

module.exports = Base;
