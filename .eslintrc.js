module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],

    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "allowImportExportEverywhere": false,
        "codeFrame": false,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": 0,
        "indent": [
            "error",
            4
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/display-name": [0, { "ignoreTranspilerName": true }],
        "react/prop-types" : 0,
        "no-console" : 0
    }
};