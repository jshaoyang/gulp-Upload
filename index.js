var through = require('through2');
var gutil = require('gulp-util');
var http = require('http');
var env = process.env;
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-upload';

function gulpPrefixer(O) {

	if (!option) {
		throw new PluginError(PLUGIN_NAME, 'file upload config is error and exit');
	}

	if ( !O.host ) {
		throw new PluginError(PLUGIN_NAME, '没有配置项host');
	}
	if ( !O.upLoadDir ) {
		throw new PluginError(PLUGIN_NAME, '没有配置项upLoadDir');
	}
	if ( !O.path ) {
		throw new PluginError(PLUGIN_NAME, '没有配置项path');
	}



 	// 返回文件 stream
 	return stream;
};

// 导出插件主函数
module.exports = gulpPrefixer;