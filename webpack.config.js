const HTMLWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    module: {
        rules: [
            /* rules for babel-loader (transform js dependencies with babel - e.g.,
               import components into other components) */
            {
                test: /\.jsx?$/, // js and jsx
                exclude: /node_modules/,
                use: "babel-loader"
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
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@components": path.resolve(__dirname, "src/components/"),
            "@constants": path.resolve(__dirname, "src/constants/"),
            "@data": path.resolve(__dirname, "src/data/"),
            "@stores": path.resolve(__dirname, "src/stores/")
        }
    }
};