const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
    presets: [
        ["@babel/preset-env", {modules: isTest ? "commonjs" : false}],
        "@babel/preset-react"
    ],
    plugins: [
        // decorators must go before class properties
        ["@babel/plugin-proposal-decorators", { "legacy": true}],
        ["@babel/plugin-proposal-class-properties", { "loose": true}],
        // private methods must have same loose config as class properties
        ["@babel/plugin-proposal-private-methods", { "loose": true }]
    ]
};