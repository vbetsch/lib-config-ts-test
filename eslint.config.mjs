// import baseConfig from '@vbetsch/lib-config-ts/eslint/base';
import cliConfig from '@vbetsch/lib-config-ts/eslint/cli';

export default [
  // ...baseConfig,
  ...cliConfig,
  {
    rules: {
      // 'prefer-const': 'off',
    }
  }
];
