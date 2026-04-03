import tseslint from 'typescript-eslint';
import base from '@vbetsch/config-eslint/base';
// import jsx from '@vbetsch/config-eslint/jsx';
// import naming from '@vbetsch/config-eslint/naming';
// import prettier from '@vbetsch/config-eslint/prettier';
// import spellcheck from '@vbetsch/config-eslint/spellcheck';
// import strict from '@vbetsch/config-eslint/strict';

export default tseslint.config(
  ...base,
  // strict,
  // naming,
  // jsx,
  // spellcheck,
  // ...prettier,

  // IMPORTANT: You have to add these lines only for the strict module !
  // {
  //   languageOptions: {
  //     parserOptions: {
  //       project: './tsconfig.json',
  //       tsconfigRootDir: import.meta.dirname,
  //     },
  //   },
  // },

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
