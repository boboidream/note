# Promise
Promises/A+ 规范中表示为一个异步操作的最终结果，ECMAscript 规范定义为延时或异步计算最终结果的占位符。

Promise 新建后就会立即执行。then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行。
```js
let promise = new Promise((resolve, reject) => {
  console.log('Promise')
  resolve()
})

promise.then(() => {
  console.log('Callback')
})

console.log('Hello')
```

状态传递，这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。
```js
const p1 = new Promise(function (resolve, reject) {
  // ...
});

const p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
```

then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数。
then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。
采用链式的then，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作）

### Promise.prototype.catch
Promise.prototype.catch 方法是.then(null, rejection)或.then(undefined, rejection)的别名

```js
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

异步操作抛出错误，或 then 都方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获
Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。

一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。
```js
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```

Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。
一般总是建议，Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。

### Promise.prototype.finally()
finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```

### Promise.all()
Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

## 为什么
thenable 对象 duck typing 检查

* event loop 事件循环机制

  macrotask microtask 分别表示异步任务的两种分类。在挂起任务时，JS 引擎会将所有任务按照类别分到两个队列中，首先在 macrotask 的队列（也叫 task queue）中取出第一个任务，执行完毕后取出 microtask 队列中的所有任务顺序执行；之后再取 macrotask 任务，周而复始，直至两个队列的任务都取完。

