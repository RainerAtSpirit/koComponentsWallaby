var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache: true,
    entry: {
        main: './src/main'
    },
    devtool: "sourcemap",
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: []
    },
    resolve: {
        root: [path.join(__dirname, 'src')]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
