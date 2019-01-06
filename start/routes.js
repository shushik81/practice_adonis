const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));
Route.post('/login', 'AuthController.login');

Route.get('/products', 'ProductController.index');
Route.post('/products', 'ProductController.store');
Route.get('/products/:id', 'ProductController.show');
Route.put('/products/:id', 'ProductController.update');
Route.patch('/products/:id', 'ProductController.update');
Route.delete('/products/:id', 'ProductController.destroy');

Route.get('/types', 'TypeController.index');
Route.post('/types', 'TypeController.store');
Route.get('/types/:id', 'TypeController.show');
Route.put('/types/:id', 'TypeController.update');
Route.patch('/types/:id', 'TypeController.update');
Route.delete('/types/:id', 'TypeController.destroy');

Route.get('/types/:type/attrs', 'AttributeController.index');
Route.post('/types/:type/attrs', 'AttributeController.store');
Route.get('/types/:id', 'AttributeController.show');
Route.put('/types/:id', 'AttributeController.update');
Route.patch('/types/:id', 'AttributeController.update');
Route.delete('/types/:id', 'AttributeController.destroy');
