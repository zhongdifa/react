
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  "mode": 'development',
  entry: './src/main.js', //入口
  output: {//出口
    filename: "bundle.js",
    path: path.join(__dirname, 'dist')

  },

  devServer: { //测试服务器
    //配置服务器根目录
    // __dirname:当前文件所在目录
    // contentBase: path.join(__dirname, './public'),
    port: 8080, //端口配置
    open: true, // 自动打开浏览器
    // proxy: { //代理

    // }
  },

  // 加载器:loader
  module: {
    rules: [
      {
        test: /\.js$/, //以js为结尾的文件
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'] //编译jsx <react className="createEleme"></react>
          }
        }]
      }
    ]
  },

  // 插件plugins
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, './public/index.html'),
    // filename:'home.html' 指定名字
  })], //生成index.html文件
}