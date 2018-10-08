const webpack = require('webpack');

const devServer = require('./webpack-modules/dev-server');
const entry = require('./webpack-modules/entry');
const mode = require('./webpack-modules/mode');
const webpackModule = require('./webpack-modules/module');
const output = require('./webpack-modules/output');
const plugins = require('./webpack-modules/plugins');

module.exports = {
    devServer,
    entry,
    mode,
    module: webpackModule,
    output,
    plugins
};