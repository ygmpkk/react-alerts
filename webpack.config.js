var path = require('path');
var webpack = require('webpack');

var entry = {};

if (process.env.NODE_ENV === 'production') {
  entry["react-alerts.min"] = './src/index.js';
} else {
  entry["react-alerts"] = './src/index.js';
}

module.exports = {
  externals: {
    "classnames": "classNames",
    "react": "React"
  },

  entry: entry,

  // options affecting the output.
  output: {
    // Absolute path to output our bundle file. We build into Flask default static dir.
    path: path.resolve(__dirname, 'dist'),

    // The filename of the entry chunk as relative path inside the `output.path` dir
    filename: '[name].js',

    // name of the global var: "Mondavi"
    library: 'ReactAlert',

    // export itself to a global var
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'syntax-object-rest-spread'
          ]
        }
      }
    ]
  },

  resolve: {
    alias: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.js']
    }
  }
};