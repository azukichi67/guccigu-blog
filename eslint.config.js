import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import * as importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// see: https://zenn.dev/kazukix/articles/eslint-config-2024-09

export default tseslint.config(
  {
    // このオブジェクトは ignores プロパティだけにする必要あり
    ignores: ["dist"], // ESLint のチェック対象外 (node_modules と .git はデフォルトで対象外)
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Shareable Configs を有効化
  eslint.configs.recommended,
  ...tseslint.configs.strict, // strict は recommended よりも厳しめな設定
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    // eslint-plugin-react の設定
    settings: {
      react: {
        version: 'detect',
      },
    },
    // recommended に含まれていない eslint-plugin-react のルールを有効化
    rules: {
      "react/no-unknown-property": "off",
      'react/destructuring-assignment': 'error', // Props などの分割代入を強制
      'react/hook-use-state': 'error', // useState の返り値の命名を [value, setValue] に統一
      'react/jsx-boolean-value': 'error', // boolean 型の Props の渡し方を統一
      'react/jsx-fragments': 'error', // React Fragment の書き方を統一
      'react/jsx-curly-brace-presence': 'error', // Props と children で不要な中括弧を削除
      'react/jsx-no-useless-fragment': 'error', // 不要な React Fragment を削除
      'react/jsx-sort-props': 'error', // Props の並び順をアルファベット順に統一
      'react/self-closing-comp': 'error', // 子要素がない場合は自己終了タグを使う
      'react/jsx-pascal-case': 'error', // コンポーネント名をパスカルケースに統一
      'react/no-danger': 'error', // dangerouslySetInnerHTML を許可しない
      'react/prop-types': 'off', // Props の型チェックは TS で行う & 誤検知があるため無効化
    },
  },
  {
    // eslint-plugin-import の設定
    plugins: { import: importPlugin },
    rules: {
      'import/order': [
        // import の並び順を設定
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'type',
            'index',
          ],
          'newlines-between': 'never',
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
        },
      ],
    },
  },
  {
    // eslint-plugin-unused-imports の設定
    plugins: { 'unused-imports': unusedImportsPlugin },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // 重複エラーを防ぐため typescript-eslint の方を無効化
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  prettierConfig // フォーマット は Prettier で行うため、フォーマット関連のルールを無効化
);