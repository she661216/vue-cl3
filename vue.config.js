//采用vue-cli3

const devUrl = 'http://117.28.240.244:3001/mock/35/'   //本地开发环境api url

module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {        
        proxy: {
            '/api':{
                target:devUrl,
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            },
            '/ms':{
                target: devUrl,
                changeOrigin: true
            }
        }
    }
}