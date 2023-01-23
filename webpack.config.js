import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import pkg from 'webpack';
const { HotModuleReplacementPlugin } = pkg;

export default {
    entry: './src/index.tsx',
    mode: "development",

    output: {
        path: resolve(dirname(fileURLToPath(import.meta.url)), 'dist'),
        filename: '[name].js',
        clean: true
    },

    devServer: {
        static: './dist'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
            },
            

            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new HotModuleReplacementPlugin()
    ]
}