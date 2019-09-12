# webpack 配置
## css
- [CSS Loader](https://github.com/webpack-contrib/css-loader)
- [PostCSS for Webpack](https://github.com/postcss/postcss-loader)
- [less-loader](https://github.com/webpack-contrib/less-loader#less-options)
- [Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
解决 ExtractTextPlugin 分离出 .CSS 不被压缩问题
- [optimize-css-assets-webpack-plugin ](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)

## html
```json
plugins: [
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      title: libraryName + ' Demo',
      filename: '../demo/index.html',
      template: __dirname + '/src/index.ejs'
    })
  ]
```
- [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)

## 解决引用 jquery 插件问题
```
window.$ = window.jQuery = require('jquery');
```


## npm 命令
- 开发
```json
"scripts": {
    "dev": "webpack --progress --colors --watch"
  },
```

## 服务器
- [webpack-dev-server](https://webpack.js.org/guides/development/#webpack-dev-server)
- [webpack-dev-server - github](https://github.com/webpack/webpack-dev-server)

不要设置 hot 任何选项，不然会报错 `hot Module replce is disabed`

## 为 umd 插件设置 global namespace
``` coffeescript
  output:
    path: path.join root, './.tmp'
    filename: '[name].js'
    sourcePrefix: "\t"
    library: [nameSpace, camelize pluginName]
    libraryTarget: 'umd'
    umdNamedDefine: true
```

导出的 module 总为 `{}`

查看 `index.js` 是不是忘记 `module exports = yourModule`

## 插件
- [webpack-contrib](https://github.com/webpack-contrib)
## 参考资料
- [webpack多页应用架构系列](https://segmentfault.com/a/1190000007126268)
- [解决热更新](https://github.com/vuejs-templates/webpack/blob/master/template/build/dev-server.js#L32-L37)
