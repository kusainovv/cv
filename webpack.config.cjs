const HtmlWebpackPlugin = require('html-webpack-plugin');
// import { resolve, dirname } from 'path';
// import { fileURLToPath } from 'url';
// import pkg from 'webpack';
const { HotModuleReplacementPlugin } = require('webpack')
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.tsx',
    mode: "development",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },

    devServer: {
        static: './dist'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.png', '.css', '.json'],
        alias: {
            sections: path.resolve(__dirname, 'public/sections'),
        }
    },

    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-typescript", "@babel/preset-react"]
                    }
                },
            },

            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader']
            },

            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            
            {
                test: /\.(fbx|gltf|glb)$/i,
                use: [
                    { 
                        loader: 'file-loader',
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },

            {
                test: /\.(png|jpe?g|gif|ttf|svg)$/i,
                type: "asset/resource"
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
    ]
}