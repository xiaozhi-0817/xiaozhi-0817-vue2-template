module.exports = {
    publicPath: './',
    devServer: {
        open: true, //项目打开自动打开
        hot: true,   //热更新
        // 配置跨域：设置一个代理
        // proxy: {
        //     '/api': {
        //         target: 'http://map.hanchaomr.com',  //后台目标地址（协议 域名 端口号）
        //         Ws: false,
        //         //跨域配置
        //         changeOrigin: false,  //是否跨域
        //         // pathRewrite: {
        //         //     '^/api': ''
        //         // }
        //     }
        // },
        disableHostCheck: true // 内网穿透
    },
    // publicPath: './',  //部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致
    // outputDir: 'travel', //打包路径地址,Default: 'dist' ,代替 output.path
    // assetsDir: 'assets', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目  

}

