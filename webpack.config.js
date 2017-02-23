/**
 * Created by Z10002053 on 2017/2/23.
 */
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /*entry: './src/main.js',*/
  entry: {
      app: "./src/main.js",
      a: "./src/a.js"
  },
  output: {
    path: './dist',
    filename: 'js/[name]-[chunkhash].js',
    //publicPath: 'http://www.baidu.com', // 这个是线上的绝对路径所以的路径会以这个为开头
  },
  plugins:[
    new htmlWebpackPlugin({
     // filename: 'index-[hash].html',
      template: 'index.html',
      inject: 'head',
      title: 'webpack is good'
    })
  ]
};