const path = require('path')
const glob = require('glob')
const webpack = require('webpack');
const prefix = process.env.NODE_ENV === 'production' ? '/product-page' : '/';
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: prefix,
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              outputStyle: 'compressed', // These options are from node-sass: https://github.com/sass/node-sass
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    ),
    config.plugins.push(
      new webpack.DefinePlugin({
        process: {
          env: {
            BACKEND_URL: JSON.stringify(prod ? 'https://celloworld.github.io/product-page' : ''),
          },
        },
        // 'process.env.ASSET_PREFIX': JSON.stringify(prefix),
      }),
    )
    return config
  },
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' }
    }
  }
}
