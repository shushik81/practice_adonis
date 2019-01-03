const Attribute = use('App/Models/Attribute');
const Type = use('App/Models/Type');

class AttributeSeeder {
  async run() {
    await Attribute.query().delete();

    const notebookType = await Type.findBy('name', 'notebook');
    const notebookAttributes = [{ name: 'price' }, { name: 'size' }, { name: 'weight' }];
    await notebookType.attributes().createMany(notebookAttributes);

    const phoneType = await Type.findBy('name', 'phone');
    const phoneAttributes = [{ name: 'price' }, { name: 'model' }, { name: 'screen' }];
    await phoneType.attributes().createMany(phoneAttributes);

    const carType = await Type.findBy('name', 'car');
    const carAttributes = [{ name: 'price' }, { name: 'model' }, { name: 'year' }];
    await carType.attributes().createMany(carAttributes);
  }
}

module.exports = AttributeSeeder;
