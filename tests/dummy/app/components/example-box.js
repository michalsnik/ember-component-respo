import Ember from 'ember';
import layout from '../templates/components/example-box';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: ['example-box'],
  respo: ['200', '400', '500'],
});
