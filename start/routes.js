const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));
Route.post('/login', 'AuthController.login').middleware('guest');

Route.resource('/products', 'ProductController')
  .validator(new Map([[['/products.store'], ['StoreProduct']], [['/products.update'], ['UpdateProduct']]]))
  .middleware(
    new Map([
      [['/products.store', '/products.update', '/products.destroy'], ['auth']],
      [['/products.update', '/products.destroy'], ['role:admin']]
    ])
  );

Route.resource('/types', 'TypeController')
  .validator(new Map([[['/types.store', '/types.update'], ['ValidateType']]]))
  .middleware(new Map([[['/types.store', '/types.update', '/types.destroy'], ['auth', 'is:admin']]]));

Route.resource('/types/:type_id/attrs', 'AttributeController')
  .validator(new Map([[['/types/:type_id/attrs.store', '/types/:type_id/attrs.update'], ['ValidateAttribute']]]))
  .middleware(
    new Map([
      [
        ['/types/:type_id/attrs.store', '/types/:type_id/attrs.update', '/types/:type_id/attrs.destroy'],
        ['auth', 'is:admin']
      ]
    ])
  );
