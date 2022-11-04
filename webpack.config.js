const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const rulesForCSS = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader']
}
const rulesForJS = {            
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
};
const rulesForHTML = {
        test : /\.html$/,
        use: {
            loader: 'html-loader'
        }
};
const rules = [ rulesForJS, rulesForHTML, rulesForCSS];


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: { rules },
    plugins: [ 
        new HtmlWebpackPlugin({ template: './public/index.html', filename: './index.html'}),
        new MiniCssExtractPlugin({ filename: '[name].css' }) 
    ],
    devServer: {
        static: path.join(__dirname, 'build'),
        compress: true,
        open: true,
        port: 3008,
        client: {
            overlay: true,
        }
    }
}