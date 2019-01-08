class Type {
  static async findAttrs(typeId) {
    const type = await this.findOrFail(typeId);
    return type.attributes().fetch();
  }

  static async addAttr(typeId, name) {
    console.log(this);
    const type = await this.findOrFail(typeId);
    return type.attributes().create({ type_id: typeId, name });
  }

  static async findAttr(typeId, id) {
    const type = await this.findOrFail(typeId);
    const { rows: attr } = await type
      .attributes()
      .where('id', id)
      .fetch();
    return attr[0];
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

  static async updateType(id, name) {
    const type = await Type.findOrFail(id);
    await type.merge({ name });
    await type.save();
    return type;
  }

  static async deleteType(id) {
    const type = await this.findOrFail(id);
    await type.delete();
  }
}

module.exports = Type;
