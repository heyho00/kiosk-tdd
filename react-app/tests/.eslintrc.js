module.exports = {
  env: {
    jest: false,
  },
  extends: ['plugin:playwright/playwright-test', 'plugin:codeceptjs/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
