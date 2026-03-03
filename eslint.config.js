import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: { globals: globals.node },
    plugins: {
      '@stylistic': stylistic,
    },
    ignores: ['eslint.config.js', 'node_modules/**'],
    rules: {
      semi: ['error', 'always'],
      'no-var': 'error',
      '@stylistic/quotes': ['warn', 'single'],
      'prefer-const': 'warn',
      eqeqeq: 'error',
      '@stylistic/semi': 'error',
      // rule baru
      'indent': ['error', 2],
      'no-unused-vars': 'error',
      'no-var': 'error',
      'no-control-regex': 'error',
      // 'no-console': 'warn',
      'no-async-promise-executor': 'error',
      'no-duplicate-imports': 'error',
    },
  },
  globalIgnores(['eslint.config.js']),
]);