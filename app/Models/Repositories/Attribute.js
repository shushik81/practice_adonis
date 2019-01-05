class Attribute {
  static async findByName(name) {
    const { rows: result } = await this.query()
      .where({ name })
      .fetch();
    return result;
  }
}

module.exports = Attribute;
