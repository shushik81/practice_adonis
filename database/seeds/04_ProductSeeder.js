const Product = use('App/Models/Product');
const Attribute = use('App/Models/Attribute');
const ProductAttribute = use('App/Models/ProductAttribute');
const User = use('App/Models/User');
const Type = use('App/Models/Type');

class ProductSeeder {
  async run() {
    await Product.query().delete();
    await ProductAttribute.query().delete();

    function makeValue() {
      let text = '';
      const possible = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < 15; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

    const user = await User.first();

    const notebookType = await Type.findBy('name', 'notebook');
    const phoneType = await Type.findBy('name', 'phone');
    const carType = await Type.findBy('name', 'car');

    const notebookAttributes = await Attribute.ids().where('type_id', notebookType.id);
    const phoneAttributes = await Attribute.ids().where('type_id', phoneType.id);
    const carAttributes = await Attribute.ids().where('type_id', carType.id);

    const products = await Product.createMany([
      { name: 'Acer Aspire V5', type_id: notebookType.id, user_id: user.id },
      { name: 'Lenovo Y570', type_id: notebookType.id, user_id: user.id },
      { name: 'HP 5660', type_id: notebookType.id, user_id: user.id },

      { name: 'Sumsung A6', type_id: phoneType.id, user_id: user.id },
      { name: 'Xiaomi Redmi 5a', type_id: phoneType.id, user_id: user.id },
      { name: 'Lenovo A590', type_id: phoneType.id, user_id: user.id },

      { name: 'Audi A6', type_id: carType.id, user_id: user.id },
      { name: 'Mitsubishi Lancer', type_id: carType.id, user_id: user.id },
      { name: 'Toyota Prado', type_id: carType.id, user_id: user.id }
    ]);

    const result = [];
    for (const product of products) {
      let attributes = [];
      switch (product.type_id) {
        case notebookType.id:
          attributes = notebookAttributes;
          break;
        case phoneType.id:
          attributes = phoneAttributes;
          break;
        case carType.id:
          attributes = carAttributes;
          break;
        default:
      }
      if (product.type_id === notebookType.id)
        result.push(
          product.attributes().attach(attributes, row => {
            row.value = makeValue();
          })
        );
    }
    await Promise.all(result);
  }
}

module.exports = ProductSeeder;
