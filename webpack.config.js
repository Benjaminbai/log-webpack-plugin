const LogWebpackPlugin = require('./plugins/logWebpackPlugin')
const path = require('path')

module.exports = {
    entry: {
        main: './js/main.js'
    },
    output: {
        filename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].js' : '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8083
    },
    plugins: [
        new LogWebpackPlugin(() => {
            // Webpack 模块完成转换成功
            console.log('emit 事件发生啦，所有模块的转换和代码块对应的文件已经生成好~')
        }, () => {
            // Webpack 构建成功，并且文件输出了后会执行到这里，在这里可以做发布文件操作
            console.log('done 事件发生啦，成功构建完成~')
        })
    ]
}