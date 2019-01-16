class Product {
  static async attachAttrs(product, attributes) {
    const attrs = attributes.map(attribute =>
      product.attributes().sync(attribute.id, row => {
        row.value = attribute.value;
      })
    );
    return Promise.all(attrs);
  }

  static async addProduct({ name, user, response, type_id: typeId, price, attributes }) {
    const product = await this.create({ name, user_id: user.id, type_id: typeId, price });
    product.attributes = await Product.attachAttrs(product, attributes);
    response.status(201);
    return product;
  }

  static async updateProduct({ user, response, id, name, type_id: typeId, price, attributes }) {
    const product = await this.findOrFail(id);

    const { slug: role } = await user.roles().first();
    if (role !== 'admin' && product.user_id !== user.id) {
      return response.status(403).send("You don't have permission rights");
    }

    await product.merge({ name, user_id: user.id, type_id: typeId, price });
    await product.save();

    await Product.attachAttrs(product, attributes);
    response.status(201);
    return this.findProduct({ id });
  }

  static async deleteProduct({ id, user, response }) {
    const product = await this.findOrFail(id);

    const { slug: role } = await user.roles().first();
    if (role !== 'admin' && product.user_id !== user.id) {
      return response.status(403).send("You don't have permission rights");
    }

    await product.delete();
    return response.status(204).json(null);
  }

  static async findAllProducts({
    page = 1,
    per_page: perPage = 10,
    order = 'id',
    sort = 'ASC',
    field = null,
    value = null
  }) {
    const { rows: products } = await this.query()
      .column(['name', 'user_id', 'type_id'])
      .where(function() {
        if (field && value) {
          this.where(field, value);
        }
      })
      .orderBy(order, sort)
      .paginate(page, perPage);
    return products;
  }

  static async findProduct({ id }) {
    const product = await this.findOrFail(id);
    await product.load('attributes');
    return product;
  }
}

module.exports = Product;
