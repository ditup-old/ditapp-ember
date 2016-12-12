import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { isEmpty, RSVP: { Promise }} = Ember;

export default Base.extend({
  /*
  restore(data) {
  },

  authenticate(userid, password) {
  },

  invalidate(data) {
  }
  */

  store: Ember.inject.service(),

  session: Ember.inject.service('session'),

  async authenticate (userid, password) {
    // first we create the base64 encoded string of userid:password
    let inBase64 = window.btoa(decodeURIComponent(encodeURIComponent(`${userid}:${password}`)));
    // we unload all the store - to clear the cache
    this.get('store').unloadAll();

    try {
      // authenticate simply - to test the validity of the credentials
      console.log('00000000000000000000');
      await this.get('session')
        .authenticate('authenticator:basic-simple', userid, password, inBase64);
      console.log('1111111111111111111');

      // query the database for the user
      let result = await this.get('store')
        .findRecord('user', userid, { reload: true });

      console.log(result, '&&&&&&&&&&&&&&&&&');

      // invalidate the simple session
      await this.get('session').invalidate();

      // check whether the user is logged in
      if (result.get('description') === undefined) {
        throw new Error('The credentials are wrong');
      }

      return {
        basicCredentials: inBase64,
        username: userid,
        verified: !!result.get('email')
      };

    } catch (e) {
      console.log('^^^^^^^^^^^^^^^^^^', e);
      return this.get('session').invalidate().then(() => {
        // console.error(e);
        throw new Error('Authentication was not successful');
      });
    }
  },

  restore (data) {
    const { basicCredentials, username } = data;

    if (!isEmpty(basicCredentials)) {
      return Promise.resolve({ username, basicCredentials });
    } else {
      return Promise.reject();
    }
  },

  invalidate() {
    this.get('store').unloadAll();
    return Promise.resolve();
  },

});

