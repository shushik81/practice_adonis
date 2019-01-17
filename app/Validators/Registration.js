class Registration {
  get rules() {
    return {
      username: 'required|unique:users|min:4|max:30',
      password: 'required|min:4|max:30|confirmed',
      email: 'required|email|unique:users'
    };
  }

  get sanitizationRules() {
    return {
      email: 'normalize_email|trim'
    };
  }

  get messages() {
    return {
      required: '{{ field }} field is required to create a new account',
      min: '{{ field }} must be at least 4 characters long',
      max: '{{ field }} must be a maximum 30 characters long',
      unique: 'Such {{ field }} is already registered',
      'password.confirmed': 'You must confirm password'
    };
  }
}

module.exports = Registration;
