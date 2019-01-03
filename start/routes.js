const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));
Route.post('/login', 'AuthController.login');

Route.get('/products', 'ProductController.index');
Route.post('/products', 'ProductController.store');
Route.get('/products/:id', 'ProductController.show');
Route.put('/products/:id', 'ProductController.update');
Route.patch('/products/:id', 'ProductController.update');
Route.delete('/products/:id', 'ProductController.destroy')

Route.get('/types', 'TypeController.index');
Route.post('/types', 'TypeController.store');
Route.get('/types/:id', 'TypeController.show');
Route.put('/types/:id', 'TypeController.update');
Route.patch('/types/:id', 'TypeController.update');
Route.delete('/types/:id', 'TypeController.destroy')

Route.get('/types/:id/attrs', 'AttrController.index');
Route.post('/types/:id/attrs', 'AttrController.store');
Route.get('/types/:id/attrs/:id', 'AttrController.show');
Route.put('/types/:id/attrs/:id', 'AttrController.update');
Route.patch('/types/:id/attrs/:id', 'AttrController.update');
Route.delete('/types/:id/attrs/:id', 'AttrController.destoy');
