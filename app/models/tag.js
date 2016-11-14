import DS from 'ember-data';

export default DS.Model.extend({
  tagname: DS.attr('string'),
  description: DS.attr('string'),
  creator: DS.belongsTo('user')
});
