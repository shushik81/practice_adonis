const Product = use('App/Models/Product');
const Attribute = use('App/Models/Attribute');
const User = use('App/Models/User');
const Type = use('App/Models/Type');
const Factory = use('Factory');

class ProductSeeder {
  async run() {
    const users = await User.all();

    const notebookType = await Type.findBy('name', 'notebook');
    const phoneType = await Type.findBy('name', 'phone');
    const carType = await Type.findBy('name', 'car');

    const notebookAttributes = await Attribute.ids().where('type_id', notebookType.id);
    const phoneAttributes = await Attribute.ids().where('type_id', phoneType.id);
    const carAttributes = await Attribute.ids().where('type_id', carType.id);

    const products = await Product.createMany([
      { name: 'Acer Aspire V5', price: 1560, type_id: notebookType.id, user_id: users.rows[0].id },
      { name: 'Lenovo Y570', price: 1680.5, type_id: notebookType.id, user_id: users.rows[0].id },
      { name: 'HP 5660', price: 2560.6, type_id: notebookType.id, user_id: users.rows[0].id },

      { name: 'Sumsung A6', price: 960, type_id: phoneType.id, user_id: users.rows[0].id },
      { name: 'Xiaomi Redmi 5a', price: 1230.636636, type_id: phoneType.id, user_id: users.rows[0].id },
      { name: 'Lenovo A590', price: 890, type_id: phoneType.id, user_id: users.rows[0].id },

      { name: 'Audi A6', price: 156560, type_id: carType.id, user_id: users.rows[0].id },
      { name: 'Mitsubishi Lancer', price: 245560, type_id: carType.id, user_id: users.rows[0].id },
      { name: 'Toyota Prado', price: 365256.2, type_id: carType.id, user_id: users.rows[0].id },

      { name: 'Acer Aspire V3', price: 2560.7, type_id: notebookType.id, user_id: users.rows[1].id },
      { name: 'Lenovo ThinkPad P71', price: 1960.4, type_id: notebookType.id, user_id: users.rows[1].id },
      { name: 'Dell Latitude 3330', price: 2156.9, type_id: notebookType.id, user_id: users.rows[1].id },

      { name: 'Meizu M6', price: 1560.2, type_id: phoneType.id, user_id: users.rows[1].id },
      { name: 'Xiaomi Mi A2 Lite', price: 1324.3, type_id: phoneType.id, user_id: users.rows[1].id },
      { name: 'Samsung Galaxy J4', price: 1780.3, type_id: phoneType.id, user_id: users.rows[1].id },

      { name: 'Citroen C1', price: 325560, type_id: carType.id, user_id: users.rows[1].id },
      { name: 'Lamborghini Veneno', price: 856560, type_id: carType.id, user_id: users.rows[1].id },
      { name: 'Renault Kangoo', price: 132580, type_id: carType.id, user_id: users.rows[1].id }
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
      if (product.type_id === notebookType.id) {
        result.push(
          product.attributes().attach(attributes, async row => {
            const prodAttr = await Factory.model('App/Models/ProductAttribute').make();
            row.value = prodAttr.value;
          })
        );
      }
    }
    await Promise.all(result);
  }
}

module.exports = ProductSeeder;
