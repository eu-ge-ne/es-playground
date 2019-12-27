require("@babel/register")({
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
});

require("./main");
