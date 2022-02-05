const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'jest/globals': true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import', 'jsx-a11y', 'jest'],
  rules: {
    'prettier/prettier': ERROR,
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'import/no-unresolved': ERROR,
    'import/order': [
      ERROR,
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc'
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
        'newlines-between': 'never',
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react']
      }
    ],

    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/naming-convention': [
      ERROR,
      {
        selector: 'interface',
        format: ['StrictPascalCase'],
        prefix: ['I']
      },
      {
        selector: ['typeAlias', 'typeParameter'],
        format: ['StrictPascalCase'],
        prefix: ['T']
      },
      {
        selector: 'enum',
        format: ['StrictPascalCase'],
        prefix: ['E']
      }
    ]
  }
}
