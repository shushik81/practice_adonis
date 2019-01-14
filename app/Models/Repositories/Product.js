class Product {
  static async attachAttrs(product, attributes) {
    const attrs = attributes.map(attribute =>
      product.attributes().sync(attribute.id, row => {
        row.value = attribute.value;
      })
    );
    return Promise.all(attrs);
  }

  static async addProduct(name, user, typeId, price, attributes) {
    const product = await this.create({ name, user_id: user.id, type_id: typeId, price });

    product.attributes = await Product.attachAttrs(product, attributes);
    return product;
  }

  static async updateProduct(id, name, user, typeId, price, attributes, response) {
    const product = await this.findOrFail(id);

    const { slug: role } = await user.roles().first();
    if (role !== 'admin' && product.user_id !== user.id) {
      return response.status(403).send("You don't have permission rights");
    }

    await product.merge({ name, type_id: typeId, price });
    await product.save();

    await Product.attachAttrs(product, attributes);
    return this.findProduct(id);
  }

  static async deleteProduct(id, user, response) {
    const product = await this.findOrFail(id);

    const { slug: role } = await user.roles().first();
    if (role !== 'admin' && product.user_id !== user.id) {
      return response.status(403).send("You don't have permission rights");
    }

    await product.delete();
    return response.status(204);
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
