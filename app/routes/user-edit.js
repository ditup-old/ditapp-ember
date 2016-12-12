import Ember from 'ember';

export default Ember.Route.extend({
  username: null,

  model(params) {
    this.set('username', params.username);
    return this.store.findRecord('user', params.username);
  },

  actions: {
    async updateProfile() {
      let editedUser = this.store.peekRecord('user', this.get('username'));
      await editedUser.save();
      this.transitionTo('user', editedUser);
    }
  }
});
