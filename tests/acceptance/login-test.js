import { test } from 'qunit';
import moduleForAcceptance from 'ditapp-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function () {
    assert.equal(currentURL(), '/login');
  });
});

test('User can log in with correct credentials', function (assert) {
  // first create the user1
  let user = server.create('user', { id: 'user1', username: 'user1' });

  visit('/login');
  fillIn('[name=username]', user.id);
  fillIn('[name=password]', 'asdfasdf');
  click('[value="Log In"]');

  andThen(function () {
    assert.equal(currentURL(), '/');
  });
});
