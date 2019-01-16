const Type = use('App/Models/Type');

class TypeController {
  /**
   * Show a list of all types.
   * GET types
   */
  async index() {
    return Type.all();
  }

  /**
   * Create/save a new type.
   * POST types
   */
  async store({ response, request }) {
    const { name } = request.all();
    response.status(201);

    return Type.create({ name });
  }

  /**
   * Display a single type.
   * GET types/:id
   */
  async show({ params }) {
    const { id } = params;
    return Type.findOrFail(id);
  }

  /**
   * Update type details.
   * PUT or PATCH types/:id
   */
  async update({ response, request, params }) {
    response.status(201);
    return Type.updateType({ ...params, ...request.only(['name']) });
  }

  /**
   * Delete a type with id.
   * DELETE types/:id
   */
  async destroy({ response, params }) {
    await Type.deleteType(params);
    return response.status(204);
  }
}

module.exports = TypeController;
