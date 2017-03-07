import Ember from 'ember';
import { initialize } from 'dummy/initializers/component-respo';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

const { Application, run } = Ember;

module('Unit | Initializer | component respo', {
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
