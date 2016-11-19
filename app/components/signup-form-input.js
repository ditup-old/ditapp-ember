//*
import Ember from 'ember';

export default Ember.Component.extend({
  // boolean whether username is valid
  valid: Ember.computed('value', `validation.isTruelyValid`, function () {
    return this.get(`validation.isTruelyValid`);
  }).readOnly(),

  // should say none or success or danger
  display: Ember.computed('value', 'validation.isTruelyValid', 'validation.isValid',
    function () {
      if (!this.get('value')) return 'none';
      if (this.get('validation.isValid')
        !== this.get('validation.isTruelyValid')) return 'warning';
      if (this.get('valid') === true) return 'success';
      return 'danger';
    }).readOnly()
});
