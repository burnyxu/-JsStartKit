import path from 'path'
import webpack from 'webpack'
import htmlwebpackPlugin from 'html-webpack-plugin'
import webpackHtmlMD5Hash from 'webpack-md5-hash'
import extractTextPlugin from 'extract-text-webpack-plugin'
export default{
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname,'src/vender'),
         main:  path.resolve(__dirname,'src/index')
    },
    target: 'web',
    output:{
        path: path.resolve(__dirname,'dist'),
        publicPath:'/',
        filename: '[name].[chunkhash].js'
    },
    plugins:[
        new extractTextPlugin('[name].[contenthash].css'),
        new webpackHtmlMD5Hash(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new htmlwebpackPlugin({
            template: 'src/index.html',
            inject:true
        }),
        //eliminate duplicate packages when generate bundle
        new webpack.optimize.DedupePlugin(),
        //minify js
        new webpack.optimize.UglifyJsPlugin()

    ],
    module:{
        loaders:[
            {test:/\.js$/,exclude:/node_modules/,loaders:['babel']},
            {test:/\.css$/,loader:extractTextPlugin.extract('css?sourceMap')}
        ]
    }
}

