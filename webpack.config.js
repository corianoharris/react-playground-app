module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:80",
    "webpack/hot/only-dev-server",
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    inline: true,
    port: 8008,
  },
};
