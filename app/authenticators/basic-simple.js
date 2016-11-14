import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({

  authenticate(userid, password) {
    // first we create the base64 of userid:password
    let inBase64 = window.btoa(decodeURIComponent(encodeURIComponent(`${userid}:${password}`)));

    return Promise.resolve({
      basicCredentials: inBase64,
      checking: true
    });
  }

});
