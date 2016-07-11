var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "app");
var OUTPUT = path.resolve(__dirname, "public");
 
module.exports = {
  entry: DEV+"/app.jsx",
  output: {
    filename: OUTPUT+"/bundle.js"
  }, 
  watch: true,
  module: {
   loaders: [
     {
       test: /\.jsx$/,
       loader: 'babel',
       query: {
         presets: ['react', 'es2015'] 
       }
     }
   ]
 }
};
