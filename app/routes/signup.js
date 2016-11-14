import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    signupUser(user) {
      this.store.createRecord('user', user).save().then(() => {
        this.transitionTo(`/user/${user.username}`);
      });
    }
  }
});
