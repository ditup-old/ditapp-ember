import Ember from 'ember';

export default Ember.Component.extend({
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
