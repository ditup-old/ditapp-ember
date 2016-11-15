import Ember from 'ember';
import ESASession from 'ember-simple-auth/services/session';

export default ESASession.extend({
  store: Ember.inject.service(),

  currentUser: Ember.computed('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {

      const username = this.get('data').authenticated.username;

      return (async function () {

        return await this.get('store')
          .findRecord('user', username, { reload: true })

      }.call(this));
    }
  })
});

