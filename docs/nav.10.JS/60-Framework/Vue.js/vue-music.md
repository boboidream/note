# vue-music
webpack 配置别名

fastclick 解决 300ms 延迟问题
如果需要点击，添加 needsclick
betterScroll 做轮播图

根目录跳转
```js
route: {
	path: '/',
	redirect: '/Recomment'
}
```

jsonp 使用
[jsonp](https://github.com/webmodules/jsonp)
[better-scroll](https://github.com/ustbhuangyi/better-scroll	)
[axios](https://github.com/mzabriskie/axios)
懒加载
[vue-lazyload](https://github.com/hilongjw/vue-lazyload)

Object.assign({}, {a: 1})

v-html 指令，做转译

初始化 Dom 后渲染
```
mouted() {
	setTimeout(() => {
		  BScroll()
	}, 20)
}
```

获取 DOM 元素，通过 refs 属性：this.$refs.sliderGroup.children

## 存在异步渲染时
通过 v-if ，当数据拿到后再去渲染组件

按条件，添加 class 的写法
```
:class = "{active: currentPageIndex === index}"
```

## 缓存 DOM
<keep-alive></keep-alive>
有计时器资源时，当

## 调用接口

## data 和 变量共享
只有当变量需要跟 dom 绑定，需要被监听时，采用 data 和 computed 属性。
不需要观测的，可以在
```js
created () {
	this.touch = {}
}
```

向下取整 Math.floor
x / y | 0

## 传 class
```js
:class="{current: true}"
```

## 开发环境跨域
我们修改 dev 下 proxyTable 的配置，代码如下：
 proxyTable: {
  '/xxxservice': {
    target: 'http://xxx.com.cn', //你的目标域名
    changeOrigin: true
  },
  //...
}

部署到测试
scp2 的 node 包上传代码