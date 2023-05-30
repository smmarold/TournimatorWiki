const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (_env, argv) {
	const isProduction = argv.mode === 'production';
	const isDevelopment = !isProduction;

	return {
		devtool: isDevelopment && 'cheap-module-source-map',
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'assets/js/[name].[contenthash:8].js',
			publicPath: '/',
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							cacheCompression: false,
							envName: isProduction ? 'production' : 'development',
						},
					},
				},
				{
					test: /\.css$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
					],
				},
			],
		},
		resolve: {
			extensions: ['.js', '.jsx'],
		},
	};
};
