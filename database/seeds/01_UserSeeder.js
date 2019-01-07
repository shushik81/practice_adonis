const User = use('App/Models/User');
const Token = use('App/Models/Token');

class UserSeeder {
  async run() {
    await User.query().delete();
    await Token.query().delete();
    const user = [
      { username: 'admin', email: 'admin@df.df', password: 'qwerty' },
      { username: 'user1', email: 'user1@df.df', password: 'qwerty' }
    ];
    await User.createMany(user);
  }
}

module.exports = UserSeeder;
