# 五、Redux数据流
- [Redux 中文文档](http://cn.redux.js.org/)
- [getting-started-with-redux视频教程](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree?series=getting-started-with-redux)


## 遇到的大坑
- 一个 reducers 文件里，只能有一个

```js
// 如果有两个，则只认最后一个 function
export default function(){
}
```

- 查看 store 的值

```js
console.log(store.getState())
```
