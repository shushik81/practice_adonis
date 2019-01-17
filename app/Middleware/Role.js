const Product = use('App/Models/Product');

class Role {
  // eslint-disable-next-line
  async handle({ params, response, auth }, next, prop) {
    const { id } = params;
    const user = await auth.getUser();
    const product = await Product.findOrFail(id);
    const { slug: role } = await user.roles().first();
    if (role !== prop[0] && product.user_id !== user.id) {
      return response.status(403).send("You don't have permission rights");
    }
    await next();
  }
}

module.exports = Role;
