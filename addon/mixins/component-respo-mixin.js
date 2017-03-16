import Ember from 'ember';

const { Mixin, get, getWithDefault, set, run: { throttle } } = Ember;

const defaultPrefixes = ['lt', 'lte', 'gt', 'gte', 'eq'];

export default Mixin.create({
  /**
   * Example respo settings:
   *
   * respo = {
   *   breakpoints: [200, 500, 800],
   *   prefixes: ['lt', 'lte', 'gt', 'gte', 'eq'],
   * }
   *
   * or just:
   *
   * respo = [200, 500, 800]
   *
   */
  respo: null, // to be set in component
  respoClassNames: null, // generated class names

  didRender() {
    this._super(...arguments);
    if (!get(this, 'respo')) { return; }

    window.addEventListener('resize', this._respoListener.bind(this));
    this._setupRespo();
    this._setRespoClasses();
  },

  willDestroy() {
    this._super(...arguments);

    window.removeEventListener('resize', this._respoListener.bind(this));
  },

  _respoListener() {
    throttle(this, this._setRespoClasses, 400);
  },

  _setupRespo() {
    const prefixes = getWithDefault(this, 'respo.prefixes', defaultPrefixes);
    let breakpoints;

    if (get(this, 'respo').length) {
      breakpoints = get(this, 'respo');
    } else {
      breakpoints = getWithDefault(this, 'respo.breakpoints', []);
    }

    if (breakpoints.length) {
      set(this, 'respo', { breakpoints, prefixes });
    } else {
      set(this, 'respo', null);
    }
  },

  _setRespoClasses() {
    if (!get(this, 'respo')) { return; }

    const width = this.$().width();
    const classes = this._getRespoClasses(get(this, 'respo'), width);

    set(this, 'respoClassNames', classes.join(' '));
  },

  _getRespoClasses(respo, width) {
    const { breakpoints, prefixes } = respo;

    const classes = [];

    breakpoints.forEach((breakpoint) => {
      if (prefixes.indexOf('gt') > -1 && width > breakpoint) {
        classes.push(`gt-${breakpoint}`);
      }

      if (prefixes.indexOf('gte') > -1 && width >= breakpoint) {
        classes.push(`gte-${breakpoint}`);
      }

      if (prefixes.indexOf('eq') > -1 && width === breakpoint) {
        classes.push(`eq-${breakpoint}`);
      }

      if (prefixes.indexOf('lt') > -1 && width < breakpoint) {
        classes.push(`lt-${breakpoint}`);
      }

      if (prefixes.indexOf('lte') > -1 && width <= breakpoint) {
        classes.push(`lte-${breakpoint}`);
      }
    });

    return classes;
  },
});
