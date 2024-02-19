/**
 * The basics.
 * @type {Object}
 */
module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', tsconfigRootDir: '.' },
  plugins: ['react-refresh', 'import', 'prettier'],
  rules: {},
  ignorePatterns: ['node_modules/**', 'dist/**'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
        'prettier',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            groups: [['builtin', 'external'], 'type', 'internal', ['parent', 'sibling', 'index']],
            pathGroups: [
              {
                pattern: '@/@types/**',
                group: 'type',
                position: 'before',
              },
              {
                pattern: '@/api/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@/hooks/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@/contexts/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@/layouts/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@/routes/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@/pages/**/*',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@/components/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@/store/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@/utils/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@/constants/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@/styles/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@/assets/**',
                group: 'parent',
                position: 'after',
              },
              {
                pattern: '**/*.[css,scss]',
                group: 'sibling',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: [],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            warnOnUnassignedImports: true,
          },
        ],
        'import/no-duplicates': 'off',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
      'eslint-import-resolver-typescript': true,
    },
    'import/ignore': ['\\.svg?url$'],
  },
};
