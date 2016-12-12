import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return this.username;
  },

  username(i) {
    return `user${i}`;
  },

  description: 'description'
});
