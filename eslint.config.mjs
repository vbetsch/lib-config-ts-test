import tseslint from 'typescript-eslint';
import base from '@vbetsch/config-eslint/base';
// import strict from '@vbetsch/config-eslint/strict';
// import naming from '@vbetsch/config-eslint/naming';
// import jsx from '@vbetsch/config-eslint/jsx';
// import spellcheck from '@vbetsch/config-eslint/spellcheck';
// import prettier from '@vbetsch/config-eslint/prettier';

export default tseslint.config(
  ...base,
  // strict,
  // naming,
  // jsx,
  // spellcheck,
  // ...prettier,

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
