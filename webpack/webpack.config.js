const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 入口文件
	entry: './src/index.js',
	// 输出配置
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		hot: false, // 启用HMR
		// 其他开发服务器设置...
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
      title: 'My App', // 可选，可以定义生成的HTML文件的标题
      template: './src/template.html' // 可选，如果你有一个HTML模板文件，可以在这里指定路径
    })
	],
};
