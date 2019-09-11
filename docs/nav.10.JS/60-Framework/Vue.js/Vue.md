## Vue

### 安装
- 命令行代理设置
```js
set http_proxy=http://web-proxy.oa.com:8080
```
- [安装说明](https://cn.vuejs.org/v2/guide/installation.html#Bower)

- [esLint](http://eslint.org/docs/rules/space-before-function-paren)

### webpack
- [webpack入坑之旅（一）不是开始的开始](http://guowenfh.github.io/2016/03/24/vue-webpack-01-base/)

### 组件化
1. 功能模块 - select, pagenation
2. 页面区域 - header, footer, sidebar

### 拆分组件实时渲染
```
The runtime-only build does not include the template compiler, and does not support the template option.
You can only use the render option when using the runtime-only
```

### 遇到问题
```
Failed to mount component: template or render function not defined
```

如果将 import Vue from 'vue'
改为自己路径 vue.js 错误消失，就证明是统一个问题，应该引用的版本不包括 template 渲染模版。
只需要在 webpack.config.js

```js
resolve: {
  extensions: ['.js', '.vue'],
  alias: {
    filter: path.join(__dirname, './src/filters'),
    components: path.join(__dirname, './src/components'),
    vue$: 'vue/dist/vue.common.js'
  }
}
```

- [webpack+vue的匹配报错](https://segmentfault.com/q/1010000007071229/a-1020000007082059)
- vue 文件中使用 SCSS 语法无法解析问题[Laravel Elixir Vue 2.0 support plugin](https://github.com/vuejs/laravel-elixir-vue-2)

### 事件监听时，切忌使用大写，页面会监听不到
- 错误
```
handleCancle: function() {
  console.log('handleCancel')
  this.$emit('Cancel')
}

<new-project v-if="pages.newProject" v-on:Cancel="hideNewProject"></new-project>
```

- 正确
```
handleCancle: function() {
  console.log('handleCancel')
  this.$emit('cancel')
}

<new-project v-if="pages.newProject" v-on:Cancel="hideNewProject"></new-project>
```


## 相关站点
[官方论坛](https://forum.vuejs.org/latest)
