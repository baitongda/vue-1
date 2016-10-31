'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.unshift(
    'webpack-dev-server/client?http://localhost:8090',
    "webpack/hot/dev-server"
);
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// 这里配置：请求http://localhost:9090/user
// 相当于通过本地node服务代理请求到了http://xxx.xxx.xxx.xxx:xxxx/user
var proxy = [{
        path: "/api/*",
        target: "http://xxx.xxx.xxx.xxx:xxxx",
        host: "xxx.xxx.xxx.xxx:xxxx",
        secure: false,
        bypass: function(req, res, proxyOptions) {
            req.url = req.url.replace(/^\/api/, '');
            console.log(req.url);
        }
    }]
    //启动服务
var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: proxy
});
app.listen(8090);

// 启动服务，通过webpack启动主文件main.js
