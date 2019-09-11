# Vuex 学习笔记
Vuex 与全局对象的不同是：
1. 响应式
2. 不可直接改变 Store 中 State，只能通过 commit mutations 改变 State

## Getters
 store 中定义『getters』（可以认为是 store 的计算属性）。挂载在
  `this.$store.getters`
 
```js
// 第一参数为 state, 第二个可以接收其他 getters
 doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
```

mapGetters：将 Getters 映射到局部计算属性
```js
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
```
 
## State
Vuex 通过 store 选项，提供了一种机制将状态从根组件『注入』到每一个子组件中（需调用 Vue.use(Vuex)）：
```js
// 组件内访问 store
this.$store
// 获取 State
this.$store.state
```

mapState：多个状态都声明为计算属性。
与局部计算属性混用：
```js
computed: {
  localComputed () { /* ... */ },
  // 使用对象展开运算符将此对象混入到外部对象中
  ...mapState({
    // ...
  })
}
```

## Mutations
mutation 必须是同步函数，只处理同步事件。

每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
函数名 -> 函数

不能直接调用一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：`store.commit('increment', 10)`

mapMutations 调用
```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment' // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
    ...mapMutations({
      add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
    })
  }
}
```

## Actions
Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。

Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。

```js
actions: {
    increment (context) {
      context.commit('increment')
    }
  }
```

参数解构
```js
actions: {
  increment ({ commit }) {
    commit('increment')
  }
}
```

### 分发 Action
```
// 普通分发
store.dispatch('increment')

// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```
