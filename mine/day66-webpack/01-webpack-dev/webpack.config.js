const { resolve } = require('path');
/* 
    引入插件
        html-webpack-plugin
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: [ './src/js/app.js', './src/index.html' ],
	output: {
		filename: './js/app.js',
		path: resolve(__dirname, './dist')
	},
	mode: 'development',
	module: {
		//rules这个数组中存的是一系列的对象，每一个对象中是一个加载器来处理相应需求
		rules: [
			//处理css
			{
				test: /\.css$/, //找到项目中引入的所有的css文件
				use: [ 'style-loader', 'css-loader' ] //使用loader去处理css文件,从右往左一次执行.
			},
			//处理less
			{
				test: /\.less$/, // 检查文件是否以.less结尾（检查是否是less文件）
				use: [
					// 数组中loader执行是从下到上，从右到左顺序执行
					'style-loader', // 创建style标签，添加上js中的css代码
					'css-loader', // 将css以commonjs方式整合到js文件中
					'less-loader' // 将less文件解析成css文件
				]
			},
			//语法检查
			{
				test: /\.js$/, //只检测js文件
				exclude: /node_modules/, //排除node_modules文件夹
				enforce: 'pre', //提前加载使用
				use: {
					//使用eslint-loader解析
					loader: 'eslint-loader'
				}
			},
			//语法转换:低级语法转换
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			},
			//polyfill高级语法转换按需引入
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					// 注意: presets是一个数组,里面又套了一个数组
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									useBuiltIns: 'usage', // 按需引入(需要使用polyfill)
									corejs: { version: 3 }, // 解决warning警告
									targets: {
										// 指定兼容性处理哪些浏览器
										chrome: '58',
										ie: '9'
									}
								}
							]
						],
						cacheDirectory: true // 开启babel缓存
					}
				}
			},
			//打包css文件中的图片资源
			{
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192, // 8kb --> 8kb以下的图片会base64处理
						outputPath: 'imgs', // 决定文件本地输出路径
						publicPath: '../dist/imgs', // 决定图片的url路径
						name: '[hash:8].[ext]' // 修改文件名称 [hash:8] hash值取8位  [ext] 文件扩展名
					}
				}
			},
			//打包html中img标签中的图片
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader'
				}
			},
			//加载图标字体
			{
				test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/, // 处理其他资源
				loader: 'file-loader',
				options: {
					outputPath: 'media',
					name: '[hash:8].[ext]'
				}
			}
		]
	},
	//打包html文件
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html' // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
		})
	],
	devServer: {
		open: true, // 自动打开浏览器
		compress: true, // 启动gzip压缩
		port: 3000 // 端口号
    },
    devtool: 'cheap-module-eval-source-map'
};
