const { Command } = require('@adonisjs/ace');

const Registration = use('App/Validators/Registration');
const { validate } = use('Validator');
const User = use('App/Models/User');
const Database = use('Database');
const Role = use('Role');

class CreateUser extends Command {
  static get signature() {
    return 'make:user';
  }

  static get description() {
    return 'Create new user (role: user, admin)';
  }

  async handle() {
    const slug = await this.choice('Choose user role:', ['admin', 'user']);
    const answers = {
      username: await this.ask('Enter username:'),
      email: await this.ask('Enter valid email:'),
      password: await this.secure('Enter password:'),
      password_confirmation: await this.secure('Confirm password:')
    };

    const { rules, messages } = new Registration();
    const validation = await validate(answers, rules, messages);
    if (validation.fails()) {
      this.error(`${this.icon('error')}  ${validation.messages()[0].message}`);
      process.exit(1);
    } else {
      delete answers.password_confirmation;
      const user = await User.create(answers);
      const role = await Role.query()
        .where('slug', slug)
        .first();
      await user.roles().attach([role.id]);
      this.success(`${this.icon('success')}  ${answers.username} with role ${role.name} created`);
      Database.close();
    }
  }
}

module.exports = CreateUser;
