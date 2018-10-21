module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts*',
      '!src/**/*.spec.ts*'
    ],
    tests: ['src/**/*.spec.ts*'],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
          typescript: require('typescript'),
          module: 'commonjs',
      })
    }
  };
};