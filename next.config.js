module.exports = { 
  images: {
    disableStaticImages: true
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.png$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'static',
            publicPath: '_next/static'
          }
        }
      ],
    })

    return config
  }
}
