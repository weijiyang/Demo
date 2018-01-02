const webpack = require('webpack');

const vendors = [
	'react',
	'react-dom',
	'react-router',
	//...其他库
];

module.exports ={
	entry:{
		'lib':vendors
	},
	output:{
		path:'build',
		filename:'[name].js',
		library:'[name]'
	},
	plugin:[
		new wepack.DLLPlugin({
			path: 'manifest.json',
			name:'[name]',
			context:__dirname
		})
	]
}