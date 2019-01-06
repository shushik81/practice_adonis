const Product = use('App/Models/Product');

class ProductController {
  /**
   * Show a list of all products.
   * GET products
   */
  async index() {
    return Product.all();
  }

  /**
   * Create/save a new product.
   * POST products
   */
  async store({ request }) {
    return request.all();
  }

  /**
   * Display a single product.
   * GET products/:id
   */
  async show({ params: { id } }) {
    if (id === '1') {
      return {
        id,
        product: 'Nokia 5230',
        type: 'mobile phone',
        price: '₴190'
      };
    }

    return { message: `Product id${id} not found` };
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   */
  async update({ params: { id } }) {
    return { message: `Product id${id} updated` };
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   */
  async destroy({ params: { id } }) {
    return { message: `Product id${id} deleted` };
  }
}

module.exports = ProductController;
