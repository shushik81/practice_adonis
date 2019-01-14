const Validator = use('Validator');

const attrsFn = async (data, field, message) => {
  const { attributes } = data;

  let fails = false;
  attributes.forEach(attr => {
    fails = fails || typeof attr.id === 'undefined' || typeof attr.value === 'undefined';
  });

  if (fails) {
    throw message;
  }
};

Validator.extend('attrs', attrsFn);

class StoreProduct {
  get rules() {
    return {
      name: 'min:2|max:255',
      attributes: 'array|attrs'
    };
  }

  get messages() {
    return {
      min: '{{ field }} must be at least 2 characters long',
      max: '{{ field }} must be a maximum 255 characters long',
      attrs: '{{ field }} must contain attributes{id, value}'
    };
  }
}

module.exports = StoreProduct;
