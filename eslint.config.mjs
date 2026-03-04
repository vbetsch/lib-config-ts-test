import tseslint from 'typescript-eslint';
import base from '@vbetsch/lib-config-ts/eslint/base';
import strict from '@vbetsch/lib-config-ts/eslint/strict';
import naming from '@vbetsch/lib-config-ts/eslint/naming';
import jsx from '@vbetsch/lib-config-ts/eslint/jsx';
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
  naming,
  jsx,
  ...prettier
);
