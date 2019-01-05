const Product = use('App/Models/Product');

class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   */
  async index() {
    return Product.all();
  }

  /**
   * Create/save a new product.
   * POST products
   */
  async store({ request }) {
    const { name, user_id = 1, type_id = 1, attributes } = request.all();
    const product = await Product.create({ name, user_id, type_id });
    product.attributes = await product.productAttributes().createMany(attributes);
    return product;
  }

  /**
   * Display a single product.
   * GET products/:id
   */
  async show({ params }) {
    const { id } = params;
    return Product.findOrFail(id);
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   */
  async update({ request, params: { id } }) {
    const { name, user_id = 1, type_id = 1, attributes } = request.all();
    const product = await Product.findOrFail(id);
    await product.merge({ name, user_id, type_id });
    await product.save();

    if (attributes) {
      product.attributes = await product.productAttributes().saveMany(attributes);
    }
    return product;
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   */
  async destroy({ params }) {
    const { id } = params;
    const product = await Product.findOrFail(id);
    await product.delete();

    return { message: 'Ok' };
  }
}

module.exports = ProductController;
