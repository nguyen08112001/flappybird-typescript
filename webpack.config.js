const path = require('path');

module.exports = {
    entry: './src/main.ts',
    module: {
        rules: [{
            test: /\.ts$/,
            include: [path.resolve(__dirname, 'src')],
            use: 'ts-loader',
        }]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'eval-source-map',
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),
    },
    mode: 'development',
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, '')
    //     },
    //     compress: true,
    // }
};