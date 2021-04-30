module.exports = {
    devServer: {
    //   open: true,
      proxy: {
        '/api': {
        //  接口请求路径
          target: `http://localhost:8090`,
        //   changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }