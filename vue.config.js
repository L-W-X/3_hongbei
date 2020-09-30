module.exports = {
    devServer: {
        proxy: {
          '/api': { // 只对请求路由以/api开头的请求进行代理转发
            target: 'https://api.hongbeibang.com', // 转发的目标url
            changeOrigin: true ,// 支持跨域
             pathRewrite: {'^/api': ''}   // 后台接口本身就有/api
          }
        }
      },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    // 设计稿宽度的1/10，一般为75
                    require('postcss-px2rem')({remUnit: 37.5}),
                ]
            }
        }
    }
}