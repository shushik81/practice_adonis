class Type {
  static async updateType({ id, name }) {
    const type = await this.findOrFail(id);
    await type.merge({ name });
    await type.save();
    return type;
  }

  static async deleteType({ id }) {
    const type = await this.findOrFail(id);
    await type.delete();
  }
}

module.exports = Type;
