class ValidateType {
  get rules() {
    return {
      name: 'required|min:2|max:255'
    };
  }

  get messages() {
    return {
      required: '{{ field }} required field',
      min: '{{ field }} must be at least 2 characters long',
      max: '{{ field }} must be a maximum 255 characters long'
    };
  }
}

module.exports = ValidateType;
