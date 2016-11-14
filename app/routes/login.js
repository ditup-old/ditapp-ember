import Ember from 'ember';

export default Ember.Route.extend({
  model() {},

  authManager: Ember.inject.service('session'),

  actions: {
    authenticate(username, password) {
      console.log('authenticating next');
      this.get('authManager').authenticate('authenticator:basic', username, password).then(() => {
        this.transitionTo(`/user/${username}`);
      }, (err) => {
        console.log(err);
      });
    }
  }
});
