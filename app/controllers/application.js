import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  showHeader: Ember.computed('session.isAuthenticated', 'session.data.authenticated.checking', 'currentPath', function () {
    let isLogged = this.get('session').get('isAuthenticated') && !this.get('session').get('data').authenticated.checking;
    let isIndex = ['index', 'login', 'signup'].indexOf(this.get('currentPath')) > -1;
    return !(isIndex && !isLogged);
  })
});
