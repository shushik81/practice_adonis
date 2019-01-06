const Factory = use('Factory');

Factory.blueprint('App/Models/Attribute', (faker, i, data) => ({
  id: data[i],
  value: faker.string({ length: 15 })
}));
