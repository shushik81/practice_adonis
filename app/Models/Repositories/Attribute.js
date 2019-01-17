const Type = use('App/Models/Type');

class Attribute {
  static async findAttrs({ type_id: typeId }) {
    const type = await Type.findOrFail(typeId);
    return type.attributes().fetch();
  }

  static async addAttr({ name, type_id: typeId }) {
    const type = await Type.findOrFail(typeId);
    return type.attributes().create({ name });
  }

  static async findAttr({ id, type_id: typeId }) {
    const type = await Type.findOrFail(typeId);
    return type
      .attributes()
      .where('id', id)
      .firstOrFail();
  }

  static async updateAttr({ id, type_id: typeId, name }) {
    const attr = await this.findAttr({ id, type_id: typeId });
    await attr.merge({ name });
    await attr.save();
    return attr;
  }

  static async deleteAttr({ id, type_id: typeId }) {
    const attr = await this.findAttr({ id, type_id: typeId });
    await attr.delete();
  }
}

module.exports = Attribute;
