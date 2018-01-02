const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let cleanOptions = {
	root: '/full/webpack/root/path',
	exclude:['shared.js'],
	verbose:true,
	dry:false
}
module.exports={
	entry:__dirname + '/app/main.js',
	output:{
		path:__dirname +'/build',
		filename:'bundle-[hash].js'
	},
	//打包方式
	devtool:'eval-source-map',
	//服务器配置
	devServer:{
		contentBase:'./public',
		historyApiFallback:true,
		inline:true
	},
	plugins:[
		new webpack.BannerPlugin('版权所有'),
		new HtmlWebpackPlugin({
            template: __dirname + "/public/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin() //热加载插件
	]
};	