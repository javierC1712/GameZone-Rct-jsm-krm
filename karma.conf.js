module.exports = function (config) {
  config.set({
    // 👇 Asegúrate de incluir 'jasmine' aquí
    frameworks: ['jasmine'],

    files: [
      'src/tests/**/*.test.js', // o .jsx si usas JSX en tests
      
    ],

    preprocessors: {
      'src/**/*.test.js': ['webpack', 'sourcemap'],
      'src/tests/**/*.test.js': ['webpack', 'sourcemap']
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

      resolve: {
        extensions: ['.js', '.jsx'],
      },
      devtool: 'inline-source-map',
    },

    reporters: ['progress'],
    browsers: ['ChromeHeadless'], // Cambiamos a Headless (sin abrir ventana)
    singleRun: true, // Para que se cierre automáticamente
    autoWatch: false, // Evita reinicios infinitos
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-sourcemap-loader',
    ],
  });
};
