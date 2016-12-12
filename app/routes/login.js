import Ember from 'ember';

export default Ember.Route.extend({
  model() {},

  flashMessages: Ember.inject.service(),

  authManager: Ember.inject.service('session'),

  actions: {
    authenticate(username, password) {
      this.get('authManager').authenticate('authenticator:basic', username, password).then(() => {
        this.transitionTo(`/`);
        console.log('success!');
        this.get('flashMessages').success(`You're logged in as ${username}`);
      }, (err) => {
        console.log('fail!', err);
        this.get('flashMessages').danger('The login was not successful');
      });
    }
  }
});
