module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['import', 'jsx-a11y', 'meteor', 'react', 'flowtype'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:meteor/recommended',
        'plugin:react/recommended',
        'plugin:flowtype/recommended',
    ],
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    globals: {},
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
        'import/resolver': {
            alias: [
                ['modules', './src/modules'],
                ['ui', './src/client'],
            ],
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'import/no-unresolved': [
            'error',
            {
                ignore: ['^meteor/', '^/'],
            },
        ],
        'no-console': 0,
    },
};
