export function buildSvgLoader() {
    return {
        test: /\.svg$/i,
        issuer: /\.[t]sx?$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                typescript: true,
                ext: 'tsx',
            },
        }],

    };
}
