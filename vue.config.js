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
    chainWebpack: (config) => {
        // set第一个参数：设置的别名，第二个参数：设置的路径
        config.resolve.alias
          .set('@', resolve('./src'))
          .set('components', resolve('./src/assets/components'))
          .set('js', resolve('./src/assets/js'))
          .set('image', resolve('./src/assets/image'));
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
              // 这个是加上自己的路径，
              // 注意：试过不能使用别名路径
              path.resolve(__dirname, './src/assets/style/variable.less')
            ]
         }
     }
};
