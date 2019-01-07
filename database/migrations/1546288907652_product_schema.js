const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.text('name').notNullable();
      table.integer('user_id').notNullable();
      table.integer('type_id').notNullable();
      table.float('price').notNullable();
      table.timestamp('created_at').defaultTo(this.fn.now());

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
