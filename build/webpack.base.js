//导入path模块
const path = require('path')

//引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

//引入clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    //模式
    mode: 'development',

    //打包的入口
    entry: './src/main.js',

    // 打包的出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    //打包规则
    module: {
        rules: [{
            //以vue结尾的文件，以vue-loader进行打包
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.(jpg|jpeg|png|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        },
        {
            test: /\.(jpg|jpeg|png|svg)$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit: 2048
            }
        }
        ]
    },
    //插件
    plugins: [
        //这个插件是将定义过的其他规则复制并应用到.vue文件相应的块
        new VueLoaderPlugin()
    ]
}