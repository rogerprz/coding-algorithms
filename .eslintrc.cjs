module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 'off',
    'no-empty-function': 'error',
    'no-unused-vars': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'func-names': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'warn',
    'no-shadow': 'off',
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ]
  }
};

// {
//     "root": true,
//     "env": {
//       "browser": true,
//       "es2021": true,
//       "node": true,
//       "jest": true
//     },
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//       "ecmaFeatures": {
//         "jsx": true
//       },
//       "ecmaVersion": "latest",
//       "sourceType": "module"
//     },
//     "plugins": ["react", "@typescript-eslint", "prettier", "jsx-a11y"],
//     "extends": [
//       "eslint:recommended",
//       "plugin:react/recommended",
//       "plugin:@typescript-eslint/eslint-recommended",
//       "plugin:@typescript-eslint/recommended",
//       "prettier",
//       "plugin:jsx-a11y/recommended"
//     ],
//     "rules": {
//       // "indent": ["error", 2, { "SwitchCase": 1 }], enabling rule clashes w/ Prettier leaving here as to not attempt to re-enable
//       "linebreak-style": "off",
//       "prettier/prettier": ["error", { "endOfLine": "auto" }],
//       "quotes": ["error", "single", { "avoidEscape": true }],
//       "semi": ["error", "always"],
//       "comma-dangle": "off",
//       "@typescript-eslint/no-explicit-any": "off",
//       "@typescript-eslint/ban-types": "off",
//       "@typescript-eslint/no-non-null-assertion": "off",
//       "no-unused-vars": "off",
//       "@typescript-eslint/no-unused-vars": [
//         "error",
//         {
//           "varsIgnorePattern": "^_+.",
//           "argsIgnorePattern": "^_+.",
//           "ignoreRestSiblings": true
//         }
//       ],
//       "@typescript-eslint/no-var-requires": "off",
//       "switch-colon-spacing": ["error", { "after": true, "before": false }],
//       "default-case": ["error", { "commentPattern": "^skip\\sdefault" }],
//       "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
//       "object-curly-spacing": ["error", "always"],
//       "max-len": [
//         "warn",
//         {
//           "code": 120,
//           "ignoreComments": true,
//           "ignoreTrailingComments": true,
//           "ignoreUrls": true,
//           "ignoreStrings": true,
//           "ignoreTemplateLiterals": true
//         }
//       ],
//       "@typescript-eslint/no-shadow": "off",
//       "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }],
//       "no-duplicate-imports": "error",
//       "no-empty-function": "error",
//       "no-multi-spaces": "error",
//       "no-multiple-empty-lines": ["error", { "max": 1 }],
//       "no-shadow": "off",
//       "no-undef": "off",
//       "no-unused-expressions": ["error", { "allowTernary": true, "allowShortCircuit": true }],
//       "no-use-before-define": "off",
//       "no-useless-concat": "error",
//       "no-useless-constructor": "error",
//       "no-useless-return": "error",
//       "object-property-newline": [
//         "error",
//         {
//           "allowAllPropertiesOnSameLine": true
//         }
//       ],
//       "object-curly-newline": "warn",
//       "object-shorthand": ["warn", "consistent"],
//       "space-infix-ops": "warn",
//       "react/display-name": "off",
//       "react/no-unescaped-entities": 0,
//       "react/prop-types": "off",
//       "space-unary-ops": ["error", { "words": true, "nonwords": false }],
//       "spaced-comment": [
//         "error",
//         "always",
//         {
//           "markers": ["/"],
//           "exceptions": ["-", "*"],
//           "block": {
//             "markers": ["/ <"],
//             "exceptions": ["*", "/", "/ "],
//             "balanced": true
//           }
//         }
//       ],
//       "wrap-iife": "error",
//       "yoda": "error",
//       "@typescript-eslint/explicit-function-return-type": "off", // We should create work item and re-enable @typescript-eslint/explicit-function-return-type,
//       "@typescript-eslint/consistent-type-assertions": "off",
//       "@typescript-eslint/no-require-imports": "off",
//       "@typescript-eslint/triple-slash-reference": "off",
//       "@typescript-eslint/no-namespace": "off",
//       "@typescript-eslint/explicit-module-boundary-types": "off",
//       "@typescript-eslint/ban-ts-comment": [
//         "warn",
//         { "ts-ignore": "allow-with-description", "minimumDescriptionLength": 2 }
//       ]
//     },
//     "settings": {
//       "react": {
//         "pragma": "React",
//         "version": "detect"
//       }
//     },
//     "overrides": [
//       {
//         "files": ["*.page.tsx", "*.js"],
//         "rules": {
//           "no-restricted-imports": "off",
//           "global-require": "off",
//           "@typescript-eslint/no-require-imports": "off"
//         }
//       },
//       {
//         "files": ["*.js"],
//         "rules": {
//           "no-console": "off"
//         }
//       }
//     ]
//   }
