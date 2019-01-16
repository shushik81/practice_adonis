const User = use('App/Models/User');
const Role = use('Role');

class UserSeeder {
  async run() {
    await User.query().delete();
    await Role.query().delete();

    const roleAdmin = new Role();
    roleAdmin.name = 'Admin';
    roleAdmin.slug = 'admin';
    roleAdmin.description = 'manage administration privileges';
    await roleAdmin.save();

    const roleUser = new Role();
    roleUser.name = 'User';
    roleUser.slug = 'user';
    roleUser.description = 'manage user privileges';
    await roleUser.save();

    const admin1 = await User.create({
      username: 'admin1',
      email: 'admin1@mindk.com',
      password: '123456'
    });
    await admin1.roles().attach([roleAdmin.id]);

    const admin2 = await User.create({
      username: 'admin2',
      email: 'admin2@mindk.com',
      password: '123456'
    });
    await admin2.roles().attach([roleAdmin.id]);

    const user1 = await User.create({
      username: 'user1',
      email: 'user1@mindk.com',
      password: '123456'
    });
    await user1.roles().attach([roleUser.id]);

    const user2 = await User.create({
      username: 'user2',
      email: 'user2@mindk.com',
      password: '123456'
    });
    await user2.roles().attach([roleUser.id]);
  }
}

module.exports = UserSeeder;
