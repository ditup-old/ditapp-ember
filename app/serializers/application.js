import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({
  /*
  keyForAttribute(attr) {
    return Ember.String.camelize(attr);
    // it would be enough to just return attr
  }
  */
});
