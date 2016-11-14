import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signup');
  this.route('users');
  this.route('tags');
  this.route('user', { path: '/user/:username' });
  this.route('login');
  this.route('logout');
});

export default Router;
