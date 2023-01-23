import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export default {
    entry: './src/index.tsx',

    output: {
        path: resolve(dirname(fileURLToPath(import.meta.url)), 'dist'),
        filename: '[name].js',
        clean: true
    },

    resolve: {
        extensions: ['.ts', '.tsx'],
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
                }
            },
            

            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

        ]
    },

    plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]
}