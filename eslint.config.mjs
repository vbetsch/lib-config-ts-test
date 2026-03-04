import tseslint from 'typescript-eslint';
import base from '@vbetsch/lib-config-ts/eslint/base';
import strict from '@vbetsch/lib-config-ts/eslint/strict';
import prettier from '@vbetsch/lib-config-ts/eslint/prettier';

export default tseslint.config(
  ...base,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  strict,
  ...prettier,
  {
    rules: {
      'prettier/prettier': 'error',
    }
  }
);
