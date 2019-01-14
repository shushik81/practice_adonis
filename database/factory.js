const Factory = use('Factory');

Factory.blueprint('App/Models/ProductAttribute', faker => ({
  value: faker.string({ length: 15 })
}));
