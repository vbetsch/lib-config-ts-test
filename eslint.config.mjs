import tseslint from 'typescript-eslint';
import base from '@vbetsch/lib-config-ts/eslint/base';
import strict from '@vbetsch/lib-config-ts/eslint/strict';
import naming from '@vbetsch/lib-config-ts/eslint/naming';
import jsx from '@vbetsch/lib-config-ts/eslint/jsx';
import spellcheck from '@vbetsch/lib-config-ts/eslint/spellcheck';
import prettier from '@vbetsch/lib-config-ts/eslint/prettier';

export default tseslint.config(
  // 1. Base rules (includes JS/TS recommended)
  ...base,

  // 2. IMPORTANT: Bridge between ESLint and your tsconfig.json
  // This resolves the "@typescript-eslint/no-unnecessary-condition" error in strict configuration.
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // 3. Modular configurations
  strict,
  naming,
  jsx,
  spellcheck,

  // 4. Prettier (must be last to override formatting rules)
  ...prettier,

  // 5. Custom overrides for the test project
  {
    rules: {
      'prettier/prettier': 'error',
    },
  }
);
