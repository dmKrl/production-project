import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
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

    const babelLoader = {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                targets: 'defaults',
                presets: [
                    ['@babel/preset-env'],
                ],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:4]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [typeScriptLoader, cssLoader, svgLoader, babelLoader, fileLoader];
}
