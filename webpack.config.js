const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "/build"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        }
    },
    devtool: "eval-source-map",
    plugins: [
        new ESLintPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Project",
            template: "./src/index.html",
            inject: "body",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|avif|jpe?g)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/",
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },

};
