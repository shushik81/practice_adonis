const Schema = use('Schema');

class TypeSchema extends Schema {
  up() {
    this.create('types', table => {
      table.increments();
      table.string('name', 255).notNullable();
    });
  }

  down() {
    this.drop('types');
  }
}

module.exports = TypeSchema;
