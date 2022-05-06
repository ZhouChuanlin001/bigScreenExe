module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'improvement', 'docs', 'style', 'refactor', 'pref', 'build', 'chore', 'revert'
    ]],
  }
};
