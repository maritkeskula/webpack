const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.s[ca]ss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.ts$/,
        use: ['ts-loader']
      },
      {
        test: /\.twig$/,
        use: ['twig-loader']
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // }
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({ 
        template: './src/views/pages/index.twig', 
        filename: 'index.html',
        posts: [
          {title:'Some title', content: 'Some cool content over here!'},
          {title:'lolz', content: 'Lorem ipsum dolor sit amet'},
          {title:'lalalala', content: 'meow meow meow meow meow'},
          {title:'lorem ipsum', content: 'Nihil unde minus voluptatibus odio'},
          {title:'gigigigigi', content: 'Adipisci officia praesentium odio placeat aut error'},
        ]
      }),
      new HtmlWebpackPlugin
      ({ 
        template: './src/views/pages/about.twig',
         filename: 'about.html'}),
      new HtmlWebpackPlugin
      ({ 
        template: './src/views/pages/contact.twig', 
        filename: 'contact.html'
      })
    ],
};

