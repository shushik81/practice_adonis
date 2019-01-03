/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments('product_id');
      table.integer('product_type').notNullable();
      table.text('name').notNullable();
      table.float('price', 2).notNullable();
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductSchema;
