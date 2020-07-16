const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'production ',
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, '../', "release"),
        filename: "bundle.[hash:8].js"
    },
    optimization: {
        splitChunks: {  //分割代码块
            cacheGroups: {  //缓存组 缓存公共代码
                commons: {  //公共模块
                    name: "commons",
                    chunks: "initial",  //入口处开始提取代码
                    minSize: 0,      //代码最小多大，进行抽离
                    minChunks: 2,    //代码复 2 次以上的抽离
                },
                // vendor:{    //比较优雅的分离打包配置：将重复引入的第三方包抽离出来
                //     priority:1,     //优先级
                //     test:/node_modules/,    //引用的代码包位置
                //     chunks:'initial',   //代码入口
                //     minSize:0,      //代码最小大小
                //     minChunks:2  //最少引用次数
                // }
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                    minSize: 0,
                    minChunks: 1,
                    chunks: 'initial',
                    priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理
                }
            }
        },
        minimizer: [
            new UglifyJSPlugin(),
            new TerserPlugin({
                terserOptions: {
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    compress: {
                        drop_console: true,
                        drop_debugger: false,
                        pure_funcs: ['console.log'] // 移除console
                    }
                },
            }),
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
    ],
    devtool: '#eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]', // 保持名称不变
                        limit: 20*1024, // 小于20k的图片 打包成base64
                        outputPath: 'assets/' // 打包后的存放路径 dist/assets
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 5000,
                    name: 'fonts/[name].[ext]?[hash:8]'
                }
            },
            {
                test: /\.css$/,
                use:[ // 由后向前加载
                    {loader: "style-loader"},
                    {loader: 'css-loader'},
                    {loader: "postcss-loader"}
                ]
            },
            {
                test: /\.less$/,
                use:[
                    {loader: "style-loader"},
                    {loader: 'css-loader'},
                    {loader: "postcss-loader"},
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    {loader: "style-loader"},
                    {loader: 'css-loader'},
                    {loader: "postcss-loader"},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    {loader: "style-loader"},
                    {loader: 'css-loader'},
                    {loader: "postcss-loader"},
                    {loader: 'stylus-loader'}
                ]
            },
            /*{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [[
                        "@babel/preset-env",
                        {
                            useBuiltIns: "usage"
                        }
                    ]]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: 'file-loader'
            }*/
        ]
    }
}
