# Vue Router 笔记

当执行了,通过 router 配置参数注入路由，
```
const app = new Vue({
  router
}).$mount('#app')
```

组件内可以通过 `this.$route` 路由对象，获取到路由数据
## 动态路由匹配
将 params 参数 `$route.params.id`

响应路由变化
```js
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```

优先级
有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高

## 嵌套路由
要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。

## 导航
1. 通过 `<router-link>` 创建 a 标签来定义导航链接
`<router-link :to="..." replace>`
2. 编程式导航。
参数可以是一个字符串路径，或者一个描述地址的对象
router.push(location)
```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```
