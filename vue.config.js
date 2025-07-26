const path = require("path");

module.exports = {
	devServer: {
		proxy: 'http://localhost:5000'
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [path.resolve(__dirname, './src/styles/*.less')]
		}
	},
	chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  	},
	productionSourceMap: false
};