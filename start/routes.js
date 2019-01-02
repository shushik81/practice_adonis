const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));
Route.post('/login', 'AuthController.login');
Route.post('/products/add', 'ProductController.store');
Route.get('/products', 'ProductController.index');
Route.get('/products/types', 'ProductController.showTypes');
Route.get('/products/:id', 'ProductController.show');
Route.patch('/products/:id', 'ProductController.update');
Route.delete('/products/:id', 'ProductController.destroy');
