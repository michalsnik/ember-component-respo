module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
  ],
  rules: {
    'ember/avoid-leaking-state-in-components': [0, ['respo']],
  },
};
