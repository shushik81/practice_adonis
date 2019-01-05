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
  async store({ request }) {
    const { name } = request.all();
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
  async update({ request, params }) {
    const { id } = params;
    const { name } = request.all();
    const type = await Type.findOrFail(id);
    await type.merge({ name });
    await type.save();
    return type;
  }

  /**
   * Delete a type with id.
   * DELETE types/:id
   */
  async destroy({ params }) {
    const { id } = params;
    const type = await Type.findOrFail(id);
    await type.delete();

    return { message: 'Ok' };
  }
}

module.exports = TypeController;
