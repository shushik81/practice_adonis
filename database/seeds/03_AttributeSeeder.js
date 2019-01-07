const Attribute = use('App/Models/Attribute');
const Type = use('App/Models/Type');

class AttributeSeeder {
  async run() {
    await Attribute.query().delete();

    const notebookType = await Type.findBy('name', 'notebook');
    const notebookAttributes = [{ name: 'screen' }, { name: 'size' }, { name: 'weight' }];
    await notebookType.attributes().createMany(notebookAttributes);

    const phoneType = await Type.findBy('name', 'phone');
    const phoneAttributes = [{ name: 'size' }, { name: 'battery' }, { name: 'screen' }];
    await phoneType.attributes().createMany(phoneAttributes);

    const carType = await Type.findBy('name', 'car');
    const carAttributes = [{ name: 'engine power' }, { name: 'car body' }, { name: 'year' }];
    await carType.attributes().createMany(carAttributes);
  }
}

module.exports = AttributeSeeder;
