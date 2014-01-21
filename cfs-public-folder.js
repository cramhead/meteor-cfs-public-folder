var connect = Npm.require('connect');
var path = Npm.require('path');
var rootDir;

if (!process.env.CLOUD_DIR) {
    var bundleRoot = path.join(process.mainModule.filename, '..');
	rootDir = path.join(bundleRoot, '..') + path.sep;
} else {
    rootDir = process.env.CLOUD_DIR;
}


var serverPath = path.join(rootDir, 'cfs');

var webPath = "/cfs";

RoutePolicy.declare(webPath, 'network');

WebApp
    .connectHandlers
    .use(
        webPath,
        connect.static(serverPath)
);
