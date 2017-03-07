# ember-component-respo

> This is an addon that enhances components with dynamic classes based on their actual sizes, regardless of window width.

## Installation

```
ember install ember-component-respo
```

## Usage

Set respo breakpoints in your component:

```javascript
export default Ember.Component.extend({
  classNames: ['example-box'],
  respo: [300, 480, 640],
});
```

Depending on the actual component's size it will add proper class names on top of it, like so:

```html
<div id="ember332" class="example-box gt-300 gte-300 lt-480 lte-480 lt-640 lte-640 ember-view">
  example box
</div>
```

Default prefixes are: `gt, gte, eq, lt, lte`. If you want to disable some, use object as respo configuration:

```javascript
export default Ember.Component.extend({
  classNames: ['example-box'],
  respo: {
    breakpoints: [300, 480, 640],
    prefixes: ['gt', 'lt'],
  },
});
```

## License

This library is released it under the MIT license.
