/*const webpack = require('webpack');
const ChunksPlugin = require('webpack-split-chunks');
module.exports={
    entry:{
        nav:'./js/nav.js',
        template:'./js/template.js',
        featuers:'./js/features.js'

    },
    output:{
        filename:'index.js',
        path: './dist'
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                node_vendors:{
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    priority:1
                }
            }
        },
        minimize:false,

    },
};
*/
/*const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('bundle.css')
module.exports = {
    mode: 'production',
  entry: {
    'index.js': [
      path.resolve(__dirname, './src/js/nav.js'),
      path.resolve(__dirname, './src/js/blog.js'),
      path.resolve(__dirname, './src/js/template.js'),
      path.resolve(__dirname, './src/js/features.js'),
      
    ],
    
    'bundle.css': [
        //__dirname + '/src/css/blog.css',
       // __dirname + '/src/css/template.css',
        //__dirname + '/src/css/features.css',
        __dirname + '/src/css/home.css',

      ]
  },
  devtool: '',
  output: {
    filename: '[name]',
    //path: path.resolve(__dirname, 'dist'),
    path: __dirname + '/dist/styles/',
  },
  watch:false,
  optimization:{
    
    minimize:true,

},
/*module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          
        }
      },

{
    test: /\.css$/,
    loader:'style-loader!css-loader'
}      
    ]
  }*/
/*
  module: {
    rules: [{
        test: /\.css$/i,
        use: extractCSS.extract({
          use: {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        })
    }]
  },
  resolve: {
    alias: {},
    modules: [],
    extensions: ['.css']
  },
  plugins: [
    extractCSS
  ]
};
*/







var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
    mode: 'production',
    entry: {
        'index.js': [
            path.resolve(__dirname, './src/js/nav.js'),
            path.resolve(__dirname, './src/js/blog.js'),
            path.resolve(__dirname, './src/js/template.js'),
            path.resolve(__dirname, './src/js/features.js'),
            
          ],
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [ {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },]
    },
    optimization:{
    
        minimize:false,
    
    },
    plugins: [
        new ExtractTextPlugin("app.css", {
            allChunks: true,
            minimize:true,

        })
    ]
};
module.exports = config;