import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  givenName: DS.attr('string'),
  familyName: DS.attr('string'),
  email: DS.attr('string'),
  description: DS.attr('string'),
  password: DS.attr('string'),
  tags: DS.hasMany('tag')
});
