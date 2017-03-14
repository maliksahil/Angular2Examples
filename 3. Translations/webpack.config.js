module.exports = {
    entry: "./src/app/main",
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
            },
            {
                test: /xlf$/,
                loader: "text-loader"
            }            
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".html", ".css", ".xlf"]
    },
    devtool: "#inline-source-map"
}