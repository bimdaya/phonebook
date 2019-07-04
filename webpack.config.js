const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: "./src/index.js",
	output: {
		publicPath: path.join(__dirname, 'dist'),
		filename: "[name].js"
	},
	plugins: [
		new HtmlWebPackPlugin({template: "./src/index.html", filename: "./index.html"}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}, {
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
};
