import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:username-unique', 'Unit | Validator | username-unique', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
