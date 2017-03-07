import Ember from 'ember';
import ComponentRespoMixin from 'ember-component-respo/mixins/component-respo-mixin';

const { Component } = Ember;

export function initialize() {
  Component.reopen(ComponentRespoMixin);
}

export default {
  name: 'component-respo',
  initialize
};
