import tseslint from 'typescript-eslint';
import base from '@vbetsch/lib-config-ts/eslint/base';
import strict from '@vbetsch/lib-config-ts/eslint/strict';
import prettier from '@vbetsch/lib-config-ts/eslint/prettier';
import naming from '@vbetsch/lib-config-ts/eslint/naming';

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
  naming,
  ...prettier,
  {
    rules: {
      'prettier/prettier': 'error',
    }
  }
);
