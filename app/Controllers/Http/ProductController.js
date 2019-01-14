const Product = use('App/Models/Product');

class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   */
  async index({ request }) {
    const { page = 1, per_page: perPage = 10, order = 'id', sort = 'ASC' } = request.all();
    return Product.findAllProducts(page, perPage, order, sort);
  }

  /**
   * Create/save a new product.
   * POST products
   */
  async store({ response, request, auth }) {
    const { name, type_id: typeId, price, attributes } = request.all();
    const user = await auth.getUser();
    response.status(201);

    return Product.addProduct(name, user, typeId, price, attributes);
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
  async update({ response, request, params, auth }) {
    const { id } = params;
    const { name, type_id: typeId, price, attributes } = request.all();
    const user = await auth.getUser();
    response.status(201);

    return Product.updateProduct(id, name, user, typeId, price, attributes, response);
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   */
  async destroy({ response, params, auth }) {
    const { id } = params;
    const user = await auth.getUser();

    return Product.deleteProduct(id, user, response);
  }
}

module.exports = ProductController;
