module.exports = {
  // 项目部署的基础路径
    // App => './'
    // Web => '/'
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/production-sub-path/'
  //   : './',

  publicPath: './',
    
  // 项目输出目录 
  outputDir: './cordova/www',

  assetsDir: './assets',

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'null',
  //       ws: true,
  //       changeOrigin: true
  //     },
  //   }
  // }
}