const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash:8].js',
        path: __dirname + '/dist'
    },
    target: ['web', 'es5'],
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
}