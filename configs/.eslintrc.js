const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './configs/prettierrc'), 'utf8'),
);

module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: [
    'prettier',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'eslint-plugin-import',
  ],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-console': 'on',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'prettier/prettier': ['warn', prettierOptions],
      },
    },
  ],
};
