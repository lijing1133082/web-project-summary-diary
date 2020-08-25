const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './app/index.js',
    output: {
        path: Path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.(jpe?g|png|gif|eot|ttf|woff|woff2|ico|xls|xlsx)$/i, loader: 'url-loader', options: {
                    name: '[contenthash].[name].[ext]',
                    outputPath: 'images/',
                    limit: 2048
                }
            },
            {
                test: /\.svg$/,
                use: 'raw-loader',
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
            '&': Path.resolve(__dirname, './src'),
        }
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true, // enable gzip compression
        port: 9000,
        proxy: {
          '/api': 'http://localhost:9000'
        },
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'build.min.css',
            allChunks: true,
        })
    ]
}