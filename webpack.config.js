module.exports = {
  entry: './src/main.js',

  output: {
    filename: 'bundle.js',
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },

  module: {
    loaders: [
      {
        // Если расширение файла JS то применять трансформации Babel
        test: /\.js$/,
        loader: 'babel-loader',
        // Не изменять node_modules
        exclude: /node_modules/,
      },

      {
        // Если расширение файла VUE то применять трансформации Vue
        test: /\.vue$/,
        loader: 'vue-loader',
        // Не применять изменения к node_module
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },

  devServer: {
    port: 3000,
  }
}
