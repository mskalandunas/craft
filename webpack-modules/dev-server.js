'use strict';

const path = require('path');

module.exports = {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 3000
};