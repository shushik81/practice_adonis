const Attribute = use('App/Models/Attribute');

class AttributeController {
  /**
   * Show a list of all attrs.
   * GET attrs
   */
  async index({ params }) {
    const { type_id: typeId } = params;
    return Attribute.query()
      .select()
      .where('type_id', typeId)
      .fetch();
  }

  /**
   * Create/save a new attr.
   * POST attrs
   */
  async store({ request, params }) {
    const { type_id: typeId } = params;
    const { name } = request.all();
    return Attribute.create({ type_id: typeId, name });
  }

  /**
   * Display a single attr.
   * GET attrs/:id
   */
  async show({ params: id }) {
    return Attribute.find(id);
  }

  /**
   * Update attr details.
   * PUT or PATCH attrs/:id
   */
  async update({ request, params }) {
    const { type_id: typeId, id } = params;
    const { name } = request.all();

    const attr = await Attribute.findOrFail(id);
    await attr.merge({ type_id: typeId, name });
    await attr.save();
    return attr;
  }

  /**
   * Delete a attr with id.
   * DELETE attrs/:id
   */
  async destroy({ params }) {
    const { id } = params;
    const attr = await Attribute.findOrFail(id);
    await attr.delete();

    return { message: 'Ok' };
  }
}

module.exports = AttributeController;
