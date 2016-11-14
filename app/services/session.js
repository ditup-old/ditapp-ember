import Ember from 'ember';
import DS from 'ember-data';
import ESASession from 'ember-simple-auth/services/session';

export default ESASession.extend({
/*
  store: Ember.inject.service(),

  currentUser: Ember.computed('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      console.log(this.get('data'));
      const username = this.get('data').username;
      this.get('store').findRecord('user', username, { reload: true })
        .then((user) => {
          return user;
        })
        .catch((e) => {
          console.error(e);
        });
    }
  })
*/
});

