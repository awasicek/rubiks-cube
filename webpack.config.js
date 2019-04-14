const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            /* rules for babel-loader (transform js dependencies with babel - e.g.,
               import components into other components) */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            // decorators must go before class properties
                            ["@babel/plugin-proposal-decorators", { "legacy": true}],
                            ["@babel/plugin-proposal-class-properties", { "loose": true}]
                        ],
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: [
        /* generate HTML file with <script> injected, write to dist/index.html
           and minify */
        new HTMLWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        })
    ]
};