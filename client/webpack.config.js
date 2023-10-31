const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },module:{
    rules:[
      {test: /\.hbs$/,
      loader: 'handlebars-loader'
    }
    ]
  },
  // plugins: [
  //   new HTMLWebpackPlugin({
  //     template:path.join(__dirname, './src/views/layouts/main.hbs'),
  //     filename:'index.html',
  //     inject: 'body',
  //     templateParameters:{
  //       titlevalue: 'this is a thing'
  //     }
  //   })
  // ],
  
};