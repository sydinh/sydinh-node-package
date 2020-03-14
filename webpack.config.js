module.exports = {
  entry: {
    main: './src/index.js',
    add: './src/add.js',
    subtract: './src/subtract.js',
  },
  output: {
    path: `${__dirname}/lib`,
    filename: '[name].js',
    library: 'sydinh-node-package',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
