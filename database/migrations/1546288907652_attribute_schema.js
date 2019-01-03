const Schema = use('Schema');

class AttributeSchema extends Schema {
  up() {
    this.create('attributes', table => {
      table.increments();
      table.integer('type_id').notNullable();
      table.string('name', 255).notNullable();

      table
        .foreign('type_id')
        .references('id')
        .on('types')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('attributes');
  }
}

module.exports = AttributeSchema;
