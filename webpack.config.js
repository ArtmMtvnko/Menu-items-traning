const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'assets/[name][ext]'
    },
    devServer: {
        port: 4300,
        open: true,
        hot: true,
        compress: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                type: 'asset/resource'
            },
            {
                test: /\.html/,
                loader: 'html-loader'
            }
        ]
    }
}