const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {  // the same like import in node.js

    const {mode = 'development'} = env

    const isProd = mode === 'production';
    const isDev = mode === 'development';

    const getStyleLoader = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                filename: "index.html",
                title: "Webpack by https://github.com/Anastasya1701 Configuration",
                buildTime: new Date().toISOString(),
                template: 'public/index.html'
            })
        ]
        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: 'style-[hash:8].css'
            }))
        }

        return plugins
    }

    return {
        mode: isProd ? 'production' : isDev && 'development',

        output: {
            filename: isProd ? "index-[hash:8].js" : undefined
        },

        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node-modules/,
                    loader: "babel-loader",
                },
                //
                //Loading Image
                //
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },
                //
                //Loading Fonts
                //
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },
                //
                //Loading css
                //
                {
                    test: /\.(css)$/,
                    use: getStyleLoader()
                },
                //
                //Loading scss
                //
                {
                    test: /\.(s[ca]ss)$/,
                    use: [...getStyleLoader(), 'sass-loader']
                },
            ]
        },

        plugins: getPlugins(),

        devServer: {
            open: true,
        }
    };
};
