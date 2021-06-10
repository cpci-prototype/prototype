module.exports = {
    env: {
        browser: true,
        jest: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'es5',
                printWidth: 500,
                tabWidth: 4,
                semi: false,
            },
        ],
    },
}
