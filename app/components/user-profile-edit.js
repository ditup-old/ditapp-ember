import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  // find out whether we display the profile of the logged in user
  loggedAsUser: Ember.computed('session.isAuthenticated', 'session.data.authenticated.username', 'user.username', function () {
    let username = this.get('user.username');
    let logged = this.get('session.isAuthenticated');
    let loggedUsername = this.get('session.data.authenticated.username');

    return !!(logged && (username === loggedUsername));
  })
});
