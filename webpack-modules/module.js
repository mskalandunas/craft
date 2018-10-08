'use strict';

module.exports = {
    rules: [
        {
            test: /\.css/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        }
    ]
};