const VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const pathResolve = (file = '') => path.resolve(__dirname,file) 
module.exports = {
    entry : pathResolve('./src/main.js'),
    output : {
        path:pathResolve('./build/'),
        filename : 'bundle.js'
    },
    plugins : [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title : require('./package.json').name,
        template : './src/index.html'
      })
    ],
    devtool: 'source-map',
    module : {
     
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            },
            {
                test : /\.ts$/,
                use : 'ts-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
              {
                test: /\.(png|jpe?g|gif|jpg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
   
    
    resolve : {
        extensions : ['.ts','.js'],
        alias :
            {
                'css' : pathResolve('src/css'),
                '@' : pathResolve(''),
                'src' : pathResolve('src'),
            }
    
    },
}