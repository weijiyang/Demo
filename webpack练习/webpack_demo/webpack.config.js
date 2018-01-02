const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
	entry:__dirname + '/app/main.js',
	output:{
		path:__dirname +'/build',
		// filename:'bundle-[hash].js',
		filename:'bundle.js'
	},
	//打包方式
	devtool:'eval-source-map',
	//服务器配置
	devServer:{
		contentBase:'./public',
		historyApiFallback:true,
		inline:true
	},
	module: {
	    rules: [
	      {
	        test: /\.css$/,
	        use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: "css-loader"
	        })
	      },
	      {
	        test: /\.less$/,
	        use:ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
	      },
		  { 
		  	test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
		  	loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
		  },
	      { 
	      	test: /\.png$/, 
	      	loader: "file-loader?name=images/[hash:8].[name].[ext]" 
	      }
	    ]
	  },
	plugins:[
		new webpack.BannerPlugin('版权所有'),
		new HtmlWebpackPlugin({
            template: __dirname + "/public/index.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
            inject:true,//允许插件修改那些内容 包括head和body
            hash:false,//为静态资源生成hash值
            minify:{//压缩HTML文件
            	removeComments:true,//移除HTML中的注释
            	collapseWhitespace:false//删除空白符和换行符
            }
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        // new webpack.optimize.UglifyJsPlugin({
        // 	 compress: {
	       //      warnings: false,
	       //      drop_debugger:true,
	       //      drop_console:true
	       //  },
	       //  sourceMap: true,//这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
	       //  mangle: true
        // }),//压缩 BUNDLE.JS
        new ExtractTextPlugin("style.css")
	]
};	