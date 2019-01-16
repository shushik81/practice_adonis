const Attribute = use('App/Models/Attribute');

class AttributeController {
  /**
   * Show a list of all attrs.
   * GET attrs
   */
  async index({ params }) {
    return Attribute.findAttrs(params);
  }

  /**
   * Create/save a new attr.
   * POST attrs
   */
  async store({ response, request, params, auth }) {
    await auth.check();
    response.status(201);
    return Attribute.addAttr({ ...params, ...request.only(['name']) });
  }

  /**
   * Display a single attr.
   * GET attrs/:id
   */
  async show({ params }) {
    return Attribute.findAttr(params);
  }

  /**
   * Update attr details.
   * PUT or PATCH attrs/:id
   */
  async update({ request, params, auth }) {
    await auth.check();
    return Attribute.updateAttr({ ...params, ...request.only(['name']) });
  }

  /**
   * Delete a attr with id.
   * DELETE attrs/:id
   */
  async destroy({ response, params, auth }) {
    await auth.check();
    await Attribute.deleteAttr(params);
    return response.status(204).json(null);
  }
}

module.exports = AttributeController;
