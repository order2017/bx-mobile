const path = require('path')

module.exports = {
    devtool: '#source-map',
    entry: {
        app: './src/client-entry.js',
        vendor: [
            'es6-promise',
            'firebase/app',
            'firebase/database',
            'vue',
            'vue-router',
            'vuex',
            'vuex-router-sync'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            'public': path.resolve(__dirname, '../public')
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader!px2rem-loader?remUnit=75&remPrecision=8',
                        css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=75&remPrecision=8',
                    }
                }
            },
            {
                test: /\.scss$/,
                loader: 'css-loader!sass-loader!px2rem-loader?remUnit=75&remPrecision=8',
            },
            {
                test: /\.js$/,
                loader: 'buble-loader',
                exclude: /node_modules/,
                options: {
                    objectAssign: 'Object.assign'
                }
            },
            {
                test: /\.(png|jpg|gif|svg|eot|woff|ttf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[hash][name].[ext]?[hash]'
                }
            }
        ]
    }
}
