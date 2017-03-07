import Ember from 'ember';
import layout from '../templates/components/example-box';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: ['example-box'],
  respo: [300, 480, 640],
});
