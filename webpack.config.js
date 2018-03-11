const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    devServer: {
        port: 3000
    },
    entry: {
        popup: ['babel-polyfill', './app/index'],
        vendors: ['jquery']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'es2015', 'react', 'stage-0'
                ]
            }
        }]
    },
    devtool: NODE_ENV === 'development' ? 'source-map' : null,
    plugins: [
        new CopyWebpackPlugin([{
            from: './app/css',
            to: 'css'
        }])
    ]
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: true,
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}