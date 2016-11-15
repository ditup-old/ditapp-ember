import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service('session'),

  flashMessages: Ember.inject.service(),

  async beforeModel() {
    await this.get('authManager').invalidate();
    await this.get('flashMessages').success('Successfully logged out');
    return this.transitionTo('/login');
  }
});
