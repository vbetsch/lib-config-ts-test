import baseJestConfig from '@vbetsch/lib-config-ts/jest/base';
import domJestConfig from '@vbetsch/lib-config-ts/jest/dom';
import strictJestConfig from '@vbetsch/lib-config-ts/jest/strict';

export default {
  ...baseJestConfig,
  ...domJestConfig,
  ...strictJestConfig,
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
};
