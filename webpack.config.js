const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const target = 'web';

module.exports = {
    mode: mode,
    target: target,
    output: {
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|svg)$/i,
                type: 'asset'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    devServer: {
        static: './dist',
    },
};