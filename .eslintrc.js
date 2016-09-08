module.exports = {
    extends: 'airbnb',
    env: {
       browser: true,
       es6: true
    },
    rules: {
        'comma-dangle': 0,
        'indent': [2, 4, {SwitchCase: 1}],
        'no-param-reassign': 0,
        'no-console': ['error', { allow: ['warn'] }]
    },
    globals: {
        window: false
    }
};
