var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 引入常量
var CONST = require('./config');
module.exports = {
    entry: {
        polyfills: ['babel-polyfill', 'event-source-polyfill'],
        vendor: [
            'react', 
            'react-dom',
            // 'jquery',
            'lodash',
            'moment',
            'immutable'
        ],
        main: CONST.ENTRY,
    },
    plugins: [
        new webpack.ProvidePlugin({
            // $: 'jquery',
            _: 'lodash',
            moment: 'moment',
            cls: 'classnames',
            Immutable: 'immutable'
        }),
        new HtmlWebpackPlugin({
            title: 'p2p',
            filename: 'index.html',
            template: path.resolve(CONST.SRC, './assets/templates/index.html'),
            //favicon: path.resolve(CONST.SRC, './assets/images/favicon.png'),
            minify: {
                // removeComments: true,
                // collapseWhitespace: true
            },
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            // webpack 是从右到左读取
            name: ['vendor', 'polyfills']
        })
    ],
    output: {
        filename: 'js/[name].bundle.js',
        // filename: '[name].bundle.[chunkhash:5].js',
        path: CONST.DIST
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: [CONST.MODULES, path.resolve(CONST.SRC, './assets')],
            use: ['babel-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            // use: ['file-loader']
            exclude: [CONST.MODULES],
            use: {
                loader: 'url-loader',
                options: {
                    limit: '10000',
                    name: 'img/[name].[ext]'
                }
            }
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: '10000',
                    name: 'font/[name].[ext]'
                }
            }
        }]
    }
};