module.exports = {
    webpack(config) {

        config.module.rules.push({
            test: /\.svg$/u,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        svgoConfig: {
                            plugins: {
                                removeViewBox: false
                            }
                        }
                    }
                }
            ]
        });
        return config;

    }
}
