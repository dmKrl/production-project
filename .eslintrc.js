module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'jsx-quotes': 'off',
        'i18next/no-literal-string': [
            'warn',
            { markupOnly: true, ignoreAttribute: ['data-testid', 'to', 'sidebarToggle'] },
        ],
        'max-len': ['error', { code: 100, ignoreComments: true }],
        'linebreak-style': 0,
        // eslint-disable-next-line no-dupe-keys
        'react/jsx-props-no-spreading': 0,
        'arrow-body-style': 0,
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'object-curly-newline': 'off',
    },
    overrides: [
        {
            files: ['src/**/*.slice.ts'],
            rules: { 'no-param-reassign': ['error', { props: false }] },
        },
    ],
    globals: {
        __IS_DEV__: true,
    },
};
