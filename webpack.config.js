const path = require('path');

module.exports = {
  entry: './src/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
