class Product {
  static async attachAttrs(product, attributes) {
    const attrs = attributes.map(attribute =>
      product.attributes().sync(attribute.id, row => {
        row.value = attribute.value;
      })
    );
    return Promise.all(attrs);
  }

  static async addProduct(name, userId, typeId, price, attributes) {
    const product = await this.create({ name, user_id: userId, type_id: typeId, price });

    product.attributes = await Product.attachAttrs(product, attributes);
    return product;
  }

  static async updateProduct(id, name, userId, typeId, price, attributes) {
    const product = await this.findOrFail(id);
    await product.merge({ name, user_id: userId, type_id: typeId, price });
    await product.save();

    await Product.attachAttrs(product, attributes);
    return this.findProduct(id);
  }

  static async deleteProduct(id) {
    const product = await this.findOrFail(id);
    await product.delete();
  }

  static async findAllProducts(page, perPage, order, sort) {
    const { rows: products } = await this.query()
      .with('attributes')
      .orderBy(order, sort)
      .paginate(page, perPage);
    return products;
  }

  static async findProduct(id) {
    const product = await this.findOrFail(id);
    await product.load('attributes');
    return product;
  }
}

module.exports = Product;
