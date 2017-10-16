const path = require('path');

module.exports = {
  entry: {
  	signuppage: './app/signup/signup.jsx',
      mainpage: './app/home/home.jsx'
  },
  output: {
    path: path.resolve('public/scripts'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
      	test: /\.jsx$/,
      	loader: 'babel-loader',
      	exclude: /node_modules/,
      	query: {
      		presets: ['es2015', 'react']
      	}
      }
    ]
  }
}