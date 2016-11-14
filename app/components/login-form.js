import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    authenticate() {
      console.log('authenticating');
      this.get('authenticate')(this.get('username'), this.get('password'));
    }
  }
});
