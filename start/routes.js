const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));
Route.post('/login', 'AuthController.login');

Route.resource('/products', 'ProductController').validator(
  new Map([[['/products.store'], ['StoreProduct']], [['/products.update'], ['UpdateProduct']]])
);

Route.resource('/types', 'TypeController').validator(new Map([[['/types.store', '/types.update'], ['ValidateType']]]));

Route.resource('/types/:type_id/attrs', 'AttributeController').validator(
  new Map([[['/types/:type_id/attrs.store', '/types/:type_id/attrs.update'], ['ValidateAttribute']]])
);
