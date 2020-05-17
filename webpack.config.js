module.exports = {  // the same like import in node.js
    mode: "development",

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ]
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
            //Loading scss
            //
            {
                test: /\.(s[ca]ss)$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            //
            //Loading css
            //
            {
                test: /\.(css)$/,
                use: [

                    { loader: 'style-loader'},
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
}
