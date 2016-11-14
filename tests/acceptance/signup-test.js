import { test } from 'qunit';
import moduleForAcceptance from 'ditapp-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | signup');

// general
test('should display a signup page', function (assert) {
  visit('/signup');
  andThen(function () {
    assert.equal(currentURL(), '/signup', 'the route should exist');
  });
});

test('should display a signup form with username, email, password twice, Signup submit button', function (assert) {
  visit('/signup');
  andThen(function () {
    assert.equal(find('form.signup-form').length, 1, 'the form should exist');
    assert.equal(find('.signup-form input[name=username]').length, 1, 'the username input should exist');
    assert.equal(find('.signup-form input[name=email]').length, 1, 'the email input should exist');
    assert.equal(find('.signup-form input[name=password]').length, 1, 'the password input should exist');
    assert.equal(find('.signup-form input[name=re-password]').length, 1, 'the second password input should exist');
    assert.equal(find('.signup-form input[type=submit]').length, 1, 'a submit signup button should exist');
  });
});

// test('should display a captcha', function (assert) {});


// validation hinting of the form field
test('should highlight username red and display error when invalid', function (assert) {
  visit('/signup');
  fillIn('.signup-form input[name=username]', 'invalid*username');
  andThen(function () {
    assert.equal(find('.signup-form input[name=username].error').length, 1, 'the username input field should have `error` class when invalid input provided');
  })
});
test('should highlight the username field and display an error when not unique', function (assert) {});
test('should not highlight username when empty', function (assert) {});
test('should highlight username green when valid', function (assert) {});
test('should highlight email and display error when invalid', function (assert) {});
test('should not highlight email when empty', function (assert) {});
test('should highlight email green when valid', function (assert) {});
test('should display password strength', function (assert) {});
test('should not highlight password when empty', function (assert) {});
test('should highlight password red until minimally strong', function (assert) {});
test('should highlight password orange until strong', function (assert) {});
test('should highlight password green when strong', function (assert) {});
test('should not highlight password2 when empty', function (assert) {});
test('should highlight password2 red when not match', function (assert) {});
test('should highlight password2 green when match', function (assert) {});

// submit button
test('should activate the submit button only when all is filled', function (assert) {});
