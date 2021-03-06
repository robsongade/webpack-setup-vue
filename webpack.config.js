const VueLoaderPlugin = require('vue-loader/lib/plugin')

var Dotenv = require('dotenv-webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const pathResolve = (file = '') => path.resolve(__dirname,file) 
const env = new Dotenv({
  path: './.env'+(process.env.NODE_ENV === 'production'?'':'.dev'), // Path to .env file (this is the default)
  safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
});

let webpack_env = () =>{
    return env.definitions
}
webpack_env = webpack_env()
const name = webpack_env['process.env.NAME'] ? webpack_env['process.env.NAME'] : '...?'

module.exports = {
    entry : pathResolve('./src/main.js'),
    output : {
        path:pathResolve('./build/'),
        filename : 'bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8080,
      host : '0.0.0.0'
    },
    plugins : [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title : require('./package.json').name,
        template : './src/index.html',
        name : name
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