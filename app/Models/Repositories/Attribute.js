const Type = use('App/Models/Type');

class Attribute {
  static async findAttrs(typeId) {
    const type = await Type.findOrFail(typeId);
    return type.attributes().fetch();
  }

  static async addAttr(typeId, name) {
    console.log(this);
    const type = await Type.findOrFail(typeId);
    return type.attributes().create({ name });
  }

  static async findAttr(typeId, id) {
    const type = await Type.findOrFail(typeId);
    return type
      .attributes()
      .where('id', id)
      .firstOrFail();
  }

  static async updateAttr(typeId, id, name) {
    const attr = await this.findAttr(typeId, id);
    await attr.merge({ name });
    await attr.save();
    return attr;
  }

  static async deleteAttr(typeId, id) {
    const attr = await this.findAttr(typeId, id);
    await attr.delete();
  }
}

module.exports = Attribute;
