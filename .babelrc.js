module.exports = function(api) {
    api.cache(false);

    return {
        "presets": [
            ["@babel/preset-typescript", {
                "onlyRemoveTypeImports": true,
            }],
        ],
        "plugins": [
            "@babel/plugin-transform-modules-commonjs",
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
        ],
    };
}
