import Ember from 'ember';
import ComponentRespoMixinMixin from 'ember-component-respo/mixins/component-respo-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | component respo mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentRespoMixinObject = Ember.Object.extend(ComponentRespoMixinMixin);
  let subject = ComponentRespoMixinObject.create();
  assert.ok(subject);
});
