import Ember from 'ember';

import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: [
    validator('presence', true),
    validator('length', {
      min: 2,
      max: 32
    }),
    validator('format', {
      regex: /^(?=.{2,32}$)[a-z0-9]+([_\-\.][a-z0-9]+)*$/,
      message: 'username can contain only lowercase letters, numbers and "_", "-", "." surrounded by letters & numbers'
    }),
    validator('username-unique', {
      debounce: 500
    })
  ],
  password: [
    validator('presence', true),
    validator('length', {
      min: 4,
      max: 8
    })
  ],
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ]
});

export default Ember.Component.extend(Validations, {
  username: null,
  password: null,
  email: null,

  formValid: Ember.computed('validations.isTruelyValid',
    function () {
      return this.get('validations.isTruelyValid');
    }).readOnly(),

  actions: {
    signupUser() {
      this.get('signupUser')({
        username: this.get('username'),
        password: this.get('password'),
        email: this.get('email')
      });
    }
  }
});
