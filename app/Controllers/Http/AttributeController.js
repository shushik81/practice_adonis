const Type = use('App/Models/Type');

class AttributeController {
  /**
   * Show a list of all attrs.
   * GET attrs
   */
  async index({ params }) {
    const { type_id: typeId } = params;

    return Type.findAttrs(typeId);
  }

  /**
   * Create/save a new attr.
   * POST attrs
   */
  async store({ response, request, params }) {
    const { type_id: typeId } = params;
    const { name } = request.all();
    response.status(201);

    return Type.addAttr(typeId, name);
  }

  /**
   * Display a single attr.
   * GET attrs/:id
   */
  async show({ params }) {
    const { type_id: typeId, id } = params;

    return Type.findAttr(typeId, id);
  }

  /**
   * Update attr details.
   * PUT or PATCH attrs/:id
   */
  async update({ request, params }) {
    const { type_id: typeId, id } = params;
    const { name } = request.all();

    return Type.updateAttr(typeId, id, name);
  }

  /**
   * Delete a attr with id.
   * DELETE attrs/:id
   */
  async destroy({ response, params }) {
    const { type_id: typeId, id } = params;
    await Type.deleteAttr(typeId, id);

    return response.status(204);
  }
}

module.exports = AttributeController;
