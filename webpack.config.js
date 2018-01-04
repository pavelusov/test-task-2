const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        vendor: [
            'angular',
            'jquery',
            'moment',
            'jquery-ui'
        ],
        app: './source/app/app.js'
    },
    output: {
        path: `${__dirname}/dist/`,
        filename: 'assets/js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ["env",
                            {
                                "targets": {
                                    "browsers": ["last 2 versions"]
                                }
                            }
                        ]
                    ]
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'assets/js/vendor.bundle.js'
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
            $: 'jquery',
            jQuery: 'jquery',
            moment: 'moment'
        }),
        new ExtractTextPlugin("assets/css/styles.css"),
        new ngAnnotatePlugin({
            add: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './source/templates/index.html'
        })
    ],
    devServer: {
        host: "0.0.0.0",
        port: 3000,
        headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0s"
        },
        disableHostCheck: true
    }
};
