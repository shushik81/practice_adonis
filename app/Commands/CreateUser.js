const { Command } = require('@adonisjs/ace');

class CreateUser extends Command {
  static get signature() {
    return `
      greet
      { username: Username }
      { Password: Password }
      { first_name: First Name }
      { last_name: Last Name }
      { role: User role (user, admin) }
    `;
  }

  static get description() {
    return 'Create user';
  }

  /*
  async handle(args, options) {
    this.info('Dummy implementation for create:user command');
  }
  */
}

module.exports = CreateUser;
