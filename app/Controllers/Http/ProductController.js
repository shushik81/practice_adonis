const Product = use('App/Models/Product');

class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   */
  async index({ request }) {
    return Product.findAllProducts(request.only(['page', 'per_page', 'order', 'sort', 'field', 'value']));
  }

  /**
   * Create/save a new product.
   * POST products
   */
  async store({ response, request }) {
    response.status(201);
    return Product.addProduct(request.only(['name', 'user_id', 'type_id', 'price', 'attributes']));
  }

  /**
   * Display a single product.
   * GET products/:id
   */
  async show({ params }) {
    return Product.findProduct(params);
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   */
  async update({ response, request, params }) {
    response.status(201);

    return Product.updateProduct({ ...params, ...request.only(['name', 'user_id', 'type_id', 'price', 'attributes']) });
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   */
  async destroy({ response, params }) {
    await Product.deleteProduct(params);

    return response.status(204);
  }
}

module.exports = ProductController;
