module.exports = {
    entry: "./src/index",
    output: { filename: "./src/dist/bundle.js"},
    module: {
        loaders: [
            {
                test: /ts$/,
                loader: "ts-loader"
            },
            {
                test: /html$/,
                loader: "html-loader"
            },
            {
                test: /css$/,
                loader: "css-loader"
            }                        
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".html", ".css"]
    },
    devtool: "#inline-source-map"
}