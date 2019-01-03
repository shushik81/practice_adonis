const Schema = use('Schema');

class ProductAttributeSchema extends Schema {
  up() {
    this.create('product_attributes', table => {
      table.increments();
      table.integer('product_id').notNullable();
      table.integer('attribute_id').notNullable();
      table.text('value');
      table.timestamp('created_at').defaultTo(this.fn.now());

      table
        .foreign('product_id')
        .references('id')
        .on('products')
        .onDelete('cascade');
      table
        .foreign('attribute_id')
        .references('id')
        .on('attributes')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('product_attributes');
  }
}

module.exports = ProductAttributeSchema;
