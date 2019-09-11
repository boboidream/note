# UMD
[OMD: javascript模块化开发兼容CommonJS, AMD, CMD 以及 原生 JS](https://segmentfault.com/a/1190000004371154)


## 开发 umd 插件
https://github.com/umdjs/umd

[gulp-umd](https://github.com/eduardolundgren/gulp-umd)

[配置 webpack](https://github.com/xlsdg/webpack2-library-starter)

[简单-JavaScript 模块化-模块打包构建](http://www.jianshu.com/p/ab7815f6c55b)

[第669期】下一代模块打包工具 —— Rollup](http://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651222499&idx=3&sn=b591da8c46f7e600102e356423b2b766&scene=21#wechat_redirect)

- [webpack-doc](https://webpack.github.io/docs/library-and-externals.html)

## 结果
如果直接返回对象：
```js
module.exports = LuxPopup;
```

如果需要包裹一层：
```js
export { Wrapper }

Wrapper.LuxPopup
```

## 调用方式
参考
- [Amaze UI JS 的三种引用方式](https://github.com/amazeui/amazeui/wiki/Amaze-UI-JS-%E7%9A%84%E4%B8%89%E7%A7%8D%E5%BC%95%E7%94%A8%E6%96%B9%E5%BC%8F)