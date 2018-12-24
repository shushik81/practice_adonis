class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async index({ response }) {
    return response
      .status(200)
      .json([
        { id: 1, product: 'Nokia 5230', type: 'mobile phone', price: '₴190' },
        { id: 2, product: 'Nokia 5800', type: 'mobile phone', price: '₴290' },
        { id: 3, product: 'Canon MP230', type: 'printer', price: '₴790' }
      ]);
  }

  /**
   * Show all product types
   * @param request
   * @param response
   */
  async showTypes({ response }) {
    return response.status(201).json(['mobile phone', 'notebook', 'printer', 'televisor']);
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    return response.status(201).json(request.all());
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async show({ response, params: { id } }) {
    if (id === '1') {
      return response.status(200).json({
        id,
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
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async update({ response, params: { id } }) {
    return response.status(202).json({ message: `Product id${id} updated` });
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ response, params: { id } }) {
    return response.status(205).json({ message: `Product id${id} deleted` });
  }
}

module.exports = ProductController;
