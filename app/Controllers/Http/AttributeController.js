const Attribute = use('App/Models/Attribute');

class AttributeController {
  /**
   * Show a list of all attrs.
   * GET attrs
   */
  async index({ params }) {
    const { type_id: typeId } = params;

    return Attribute.findAttrs(typeId);
  }

  /**
   * Create/save a new attr.
   * POST attrs
   */
  async store({ response, request, params }) {
    const { type_id: typeId } = params;
    const { name } = request.all();
    response.status(201);

    return Attribute.addAttr(typeId, name);
  }

  /**
   * Display a single attr.
   * GET attrs/:id
   */
  async show({ params }) {
    const { type_id: typeId, id } = params;

    return Attribute.findAttr(typeId, id);
  }

  /**
   * Update attr details.
   * PUT or PATCH attrs/:id
   */
  async update({ request, params }) {
    const { type_id: typeId, id } = params;
    const { name } = request.all();

    return Attribute.updateAttr(typeId, id, name);
  }

  /**
   * Delete a attr with id.
   * DELETE attrs/:id
   */
  async destroy({ response, params }) {
    const { type_id: typeId, id } = params;
    await Attribute.deleteAttr(typeId, id);

    return response.status(204);
  }
}

module.exports = AttributeController;
