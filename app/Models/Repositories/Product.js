class Product {
  static async attachAttrs(product, attributes) {
    attributes.map(attribute =>
      product.attributes().sync(attribute.id, row => {
        row.value = attribute.value;
      })
    );

    return Promise.all(attributes);
  }

  async attachAttrs(attributes) {
    attributes.map(attribute =>
      this.attributes().sync(attribute.id, row => {
        row.value = attribute.value;
      })
    );
    await Promise.all(attributes);

    return this;
  }

  static async addProduct(name, userId, typeId, price, attributes) {
    const product = await this.create({ name, user_id: userId, type_id: typeId, price });

    product.attributes = await Product.attachAttrs(product, attributes);
    return product;
  }

  static async updateProduct(id, name, userId, typeId, price, attributes) {
    const product = await this.findOrFail(id);
    await product.merge({ name, user_id: userId, type_id: typeId, price });
    console.log(product.toJSON());
    await product.save();

    product.attributes = await Product.attachAttrs(product, attributes);
    return product;
  }

  static async deleteProduct(id) {
    const product = await this.findOrFail(id);
    await product.delete();
  }
}

module.exports = Product;
