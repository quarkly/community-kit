const path = require("path");
const webpack = require('webpack');

module.exports = {
    stories: [
        '../src/**/*.stories.js',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-knobs',
        '@storybook/addon-storyshots',
    ],

    webpackFinal: async (config) => {
        config.resolve.alias['swiper'] = path.resolve(__dirname, '../dist/swiper');

        config.module.rules.unshift({
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
            include: [path.resolve(__dirname, '../dist/swiper')]
        })

        return config;
    }
};
