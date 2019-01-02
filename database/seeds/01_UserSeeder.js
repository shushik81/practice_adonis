const User = use('App/Models/User');
const Token = use('App/Models/Token');

class UserSeeder {
  async run() {
    await User.query().delete();
    await Token.query().delete();
    const user = { username: 'admin', email: 'dfdf@df.df', password: 'qwerty' };
    await User.create(user);
  }
}

module.exports = UserSeeder;
