// import baseConfig from '@vbetsch/config/eslint/base';
import cliConfig from '@vbetsch/config/eslint/cli';

export default [
  // ...baseConfig,
  ...cliConfig,
  {
    rules: {
      // Tu peux surcharger une règle ici si besoin
    }
  }
];
