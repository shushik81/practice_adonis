const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.text('name', 255).notNullable();
      table.integer('user_id').notNullable();
      table.integer('type_id').notNullable();

      table
        .foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('cascade');
      table
        .foreign('type_id')
        .references('id')
        .on('types')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductSchema;
