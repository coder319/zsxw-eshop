const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    chainWebpack:(config)=>{
        //set第一个参数：设置的别名，第二个参数：设置的路径
        config.resolve.alias
          .set('@',resolve('./src'))
          .set('components',resolve('./src/assets/components'))
          .set('js',resolve('./src/assets/js'))
          .set('image',resolve('./src/assets/image'))
    }
}
