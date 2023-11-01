const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode:'development',
  module:{
    rules:[
      {test: /\.css$/i,
      use: ["style-loader", "css-loader"]},
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {test: /\.hbs$/,
      loader: 'handlebars-loader'
    }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template:path.join(__dirname, './src/index.hbs'),
      filename:'index.html',
      inject: 'body',
      templateParameters:{
        titlevalue: 'this is a thing'
      }
    })
  ],
  devServer:{
    watchFiles:['./src/index.hbs'],
    proxy:{
      '*': 'http://localhost:3333'
    }
  },
  
};