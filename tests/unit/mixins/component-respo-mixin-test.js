import Ember from 'ember';
import ComponentRespoMixinMixin from 'ember-component-respo/mixins/component-respo-mixin';
import { module, test } from 'qunit';

const { get, set } = Ember;

module('Unit | Mixin | component respo mixin');

test('_setupRespo', function(assert) {
  const ComponentRespoMixinObject = Ember.Object.extend(ComponentRespoMixinMixin);
  const subject = ComponentRespoMixinObject.create();
  
  set(subject, 'respo', [100, 200, 300]);
  subject._setupRespo();
  assert.deepEqual(get(subject, 'respo'), {
    breakpoints: [100, 200, 300],
    prefixes: ['lt', 'lte', 'gt', 'gte', 'eq'],
  });

  set(subject, 'respo', {
    breakpoints: [100, 200, 300],
  });
  subject._setupRespo();
  assert.deepEqual(get(subject, 'respo'), {
    breakpoints: [100, 200, 300],
    prefixes: ['lt', 'lte', 'gt', 'gte', 'eq'],
  });

  set(subject, 'respo', {
    prefixes: ['lt', 'gt'],
  });
  subject._setupRespo();
  assert.equal(get(subject, 'respo'), null);

  set(subject, 'respo', {
    breakpoints: [100, 200],
    prefixes: ['lt', 'gt'],
  });
  subject._setupRespo();
  assert.deepEqual(get(subject, 'respo'), {
    breakpoints: [100, 200],
    prefixes: ['lt', 'gt'],
  });
});

test('_getRespoClasses', function(assert) {
  const ComponentRespoMixinObject = Ember.Object.extend(ComponentRespoMixinMixin);
  const subject = ComponentRespoMixinObject.create();
  let classes = [];

  classes = subject._getRespoClasses({
    breakpoints: [100, 200, 300],
    prefixes: ['lt', 'lte', 'gt', 'gte', 'eq'],
  }, 150);
  assert.deepEqual(classes, ['gt-100', 'gte-100', 'lt-200', 'lte-200', 'lt-300', 'lte-300']);

  classes = subject._getRespoClasses({
    breakpoints: [100, 200],
    prefixes: ['lt', 'gt', 'eq'],
  }, 100);
  assert.deepEqual(classes, ['eq-100', 'lt-200']);

  classes = subject._getRespoClasses({
    breakpoints: [100, 200, 300],
    prefixes: ['lt', 'lte'],
  }, 299.999);
  assert.deepEqual(classes, ['lt-300', 'lte-300']);

  classes = subject._getRespoClasses({
    breakpoints: [100, 200, 300],
    prefixes: ['gt', 'gte'],
  }, 299.999);
  assert.deepEqual(classes, ['gt-100', 'gte-100', 'gt-200', 'gte-200']);
});
