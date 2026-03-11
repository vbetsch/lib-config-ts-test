// import cliJestConfig from '@vbetsch/lib-config-ts/jest/cli';

export default {
  // ...cliJestConfig,
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
};
