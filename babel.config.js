"use strict";

module.exports = api => {
    api.cache(true);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    debug: true,
                    targets: {
                        node: true,
                    },
                    useBuiltIns: "usage",
                    corejs: {
                        version: 3,
                        proposals: false,
                    },
                    shippedProposals: false
                },
            ],
        ],
        sourceMaps: "inline"
    };
};
