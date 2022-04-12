//postCss 配置文件
module.exports = {
    plugins: {
        // 'autoprefixer': {
        //     browsers: ['Android >= 4.0', 'iOS >= 8']
        // },

        //lib-flexible 的 REM 适配方案：把一行分为10分，每份就是十分之一，所以 rootValue 应该设置为你的设计稿宽度的十分之一
        'postcss-pxtorem': {
            //如果是 Vant 样式，按照 37.5 转换
            //如果是 我们自己的样式，按照75转换
            // rootvalue支持两种类型： Number || function
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            //配置要转换的 css 属性，* 代表所有
            propList: ['*']
        }
    }
}