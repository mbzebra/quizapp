const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
            {
              test: /\.css$/,
              use: [
                'style-loader', // Creates `style` nodes from JS strings
                'css-loader',   // Translates CSS into CommonJS
              ],
            },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
