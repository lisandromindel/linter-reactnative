module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'react/no-did-update-set-state': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'off'
  },
  'globals': {
    "fetch": false
  }
}
