const Product = use('App/Models/Product');

class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   */
  async index() {
    return Product.findAllProducts();
  }

  /**
   * Create/save a new product.
   * POST products
   */
  async store({ response, request }) {
    const { name, user_id: userId, type_id: typeId, price, attributes } = request.all();
    response.status(201);

    return Product.addProduct(name, userId, typeId, price, attributes);
  }

  /**
   * Display a single product.
   * GET products/:id
   */
  async show({ params }) {
    const { id } = params;
    return Product.findProduct(id);
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   */
  async update({ response, request, params }) {
    const { id } = params;
    const { name, user_id: userId, type_id: typeId, price, attributes } = request.all();
    response.status(201);

    return Product.updateProduct(id, name, userId, typeId, price, attributes);
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   */
  async destroy({ response, params }) {
    const { id } = params;
    await Product.deleteProduct(id);

    return response.status(204);
  }
}

module.exports = ProductController;
