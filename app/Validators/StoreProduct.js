const Validator = use('Validator');
const Type = use('App/Models/Type');

const attrsFn = async (data, field, message) => {
  const { type_id: typeId, attributes } = data;
  const type = await Type.findOrFail(typeId);
  const { rows: typeAttrs } = await type.attributes().fetch();

  let fails = typeAttrs.length !== Object.keys(attributes).length;
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
      name: 'required|min:2|max:255',
      type_id: 'required',
      price: 'required',
      attributes: 'required|array|attrs'
    };
  }

  get messages() {
    return {
      required: '{{ field }} required field',
      min: '{{ field }} must be at least 2 characters long',
      max: '{{ field }} must be a maximum 255 characters long',
      attrs: '{{ field }} must contain all attributes{id, value}'
    };
  }
}

module.exports = StoreProduct;
