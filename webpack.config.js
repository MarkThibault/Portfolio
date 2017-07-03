var isProduction = process.argv.indexOf('-p') !== -1;
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
//var autoprefixer = require('autoprefixer');

var appConfig = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.jsx",
    vendor: "./src/vendor.jsx"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$|\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
            'sass-loader'
          ],
          publicPath: "/dist"
        })
      },
      // {
      //   test: /\.svg$/,
      //   use: ['raw-loader']
      // },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.wav$|\.mp3$|\.ico$|\.xml$/,
        use: [{
          loader:"file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "assets/",
            outputPath: "assets/"
          }
        }]
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            publicPath: '/',
            limit: 1024,
            name: "fonts/[name].[ext]"
          }
        }]
      }
    ]
  },
  // postcss() {
  //   return [autoprefixer];
  // },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  },
  devServer: {
    port: 616,
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new FlowStatusWebpackPlugin({
        restartFlow: false,
        failOnError: true
    })
  ]
};

// production configurations
if (isProduction || process.env.NODE_ENV === 'production') {
  appConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    })
  );
  appConfig.devtool = false;
}

// build
module.exports = [appConfig];