const { peerDependencies } = require('./package.json');

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'prettier/prettier': 'error',
        'import/no-unresolved': [
            'error',
            { ignore: Object.keys(peerDependencies) },
        ],
        'react/forbid-prop-types': 0,
        'global-require': 0,
        'prefer-arrow-callback': 0,
        'func-names': 0,
        'import/no-extraneous-dependencies': 0,
        'no-underscore-dangle': 0,
        'no-unused-expressions': 0,
        'no-use-before-define': 0,
        'react/jsx-filename-extension': 0,
        'react/sort-comp': 0,
        'react/no-multi-comp': 0,
        'react/require-extension': 0,
        'react/prefer-stateless-function': 0,
        'react/prop-types': 0,
        'react/jsx-no-bind': 0,
        'react/jsx-closing-bracket-location': 0,
        'jsx-a11y/alt-text': 0,
        'react/jsx-curly-brace-presence': 0,
        'no-return-assign': 0,
        'react/no-find-dom-node': 0,
        'no-param-reassign': 0,
        'consistent-return': 0,
        'react/jsx-props-no-spreading': 0,
    },
};
