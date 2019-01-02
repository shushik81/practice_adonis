const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));
Route.post('/login', 'AuthController.login');
Route.resource('/products', 'UserController');
