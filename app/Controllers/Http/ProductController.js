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
  async store({ request, response }) {
    return response.status(201).json(request.all());
  }

  /**
   * Display a single product.
   * GET products/:id
   */
  async show({ response, params: { id } }) {
    if (id === '1') {
      return response.status(200).json({
        product_id: id,
        product: 'Nokia 5230',
        type: 'mobile phone',
        price: '₴190'
      });
    }

    return response.status(404).json({ message: `Product id${id} not found` });
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   */
  async update({ response, params: { id } }) {
    return response.status(202).json({ message: `Product id${id} updated` });
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   */
  async destroy({ response, params: { id } }) {
    return response.status(204).json({ message: `Product id${id} deleted` });
  }
}

module.exports = ProductController;
