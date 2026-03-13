import tseslint from 'typescript-eslint';
import base from '@vbetsch/lib-config-ts/eslint/base';
// import strict from '@vbetsch/lib-config-ts/eslint/strict';
// import naming from '@vbetsch/lib-config-ts/eslint/naming';
// import jsx from '@vbetsch/lib-config-ts/eslint/jsx';
// import spellcheck from '@vbetsch/lib-config-ts/eslint/spellcheck';
import prettier from '@vbetsch/lib-config-ts/eslint/prettier';

export default tseslint.config(
  ...base,
  // strict,
  // naming,
  // jsx,
  // spellcheck,
  ...prettier,

  {
    ignores: [
      // './tests/prettier.test.ts',
    ],
  },

  {
    rules: {
      // 'prettier/prettier': 'error',
    },
  }
);
