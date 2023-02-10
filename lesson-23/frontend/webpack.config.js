const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path'); 

module.exports = {
    mode: 'production',
    // devtool: 'sourse-map',
    entry: './src/js/app.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
            },
            {
                test: /\.scss$/, 
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader", 
                    },
                    {
                        loader: "sass-loader",
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/index.html',
        }),
        new ESLintPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        hot:false
    } 
} 
