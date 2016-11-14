import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service('session'),
  beforeModel() {
    this.get('authManager').invalidate()
      .then(() => {
        return this.transitionTo('/');
      });
  }
});
