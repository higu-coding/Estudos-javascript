// O webpack é um empacotador de módulos estáticos para aplicações JavaScript modernas. Ao processar a aplicação o webpack gera um gráfico que mapeia cada módulo e suas dependências e gera um ou mais pacotes.

const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  devtool: 'source-map'
};
