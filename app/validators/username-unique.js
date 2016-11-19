import Ember from 'ember';
import BaseValidator from 'ember-cp-validations/validators/base';

const UsernameUnique = BaseValidator.extend({
  store: Ember.inject.service(),

  async validate(username/*, options, model, attribute*/) {
    try {
      await this.get('store').findRecord('user', username);
      return 'username already exists';
    } catch (e) {
      console.log(e);
      return true;
    }
  }
});

UsernameUnique.reopenClass({
  /**
   * Define attribute specific dependent keys for your validator
   *
   * [
   * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
   * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
   * ]
   *
   * @param {String}  attribute   The attribute being evaluated
   * @param {Unknown} options     Options passed into your validator
   * @return {Array}
   */
  getDependentsFor(/* attribute, options */) {
    return [];
  }
});

export default UsernameUnique;
