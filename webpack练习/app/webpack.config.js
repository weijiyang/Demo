var webpack = require('webpack');
module.exports = {
	entry : "./runoob1.js",
	output : {
		path: __dirname,
		filename : "bundle.js"
	},
	module:{
		loaders: [
			 { test: /\.css$/, loader: "style-loader!css-loader" }
		]
	},
	plugins : [
		new webpack.BannerPlugin('webpack 实例 ~ = =')
	]
};