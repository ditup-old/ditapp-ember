import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';

const { isEmpty } = Ember;

export default Base.extend({

  authorize(data, block) {
    const basicCredentials = data.basicCredentials;

    if (!isEmpty(basicCredentials)) {
      block('Authorization', `Basic ${basicCredentials}`);
    }
  }

});
