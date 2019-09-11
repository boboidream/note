# setTimeout
```js
var timerId = setTimeout(func|code, delay)

// 为之前函数传参
setTimeout(function(a,b){
  console.log(a+b);
},1000,1,1);
```

## this
setTimeout 第一参数保存的是函数的 referance，所以导致执行时 context 变化。
```js
// 函数 this 指向全局
function User(login) {
  this.login = login;
  this.sayHi = function() {
    console.log(this.login);
  }
}
var user = new User('John');
setTimeout(user.sayHi, 1000);

// 解决方案一：匿名函数包裹
setTimeout(function() {
  user.sayHi()
}, 1000)

// 解决方案二：bind
setTimeout(user.sayHi.bind(user), 1000)
```

## setTimeout运行机制
setTimeout和setInterval的运行机制是，将指定的代码移出本次执行，等到**下一轮** `Event Loop` 时，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就等到再下一轮`Event Loop` 时重新判断。

setTimeout的真正作用是，在“任务队列”的现有事件的后面再添加一个事件，规定在指定时间执行某段代码。setTimeout添加的事件，会在下一次Event Loop执行。

```js
setTimeout(someTask,100);
veryLongTask();
```

如果后面立即运行的任务（当前脚本的同步任务））非常耗时，过了100毫秒还无法结束，那么被推迟运行的someTask就只有等着，等到前面的veryLongTask运行结束，才轮到它执行。

```js
// func2 先执行
setTimeout(function () {
    func1();
}, 0)
func2();
```

## 怎么用
setTimeout(f,0) 调整事件的发生顺序，冒泡回调

setTimeout一个很关键的用法就是分片，如果一段程序过大，我们可以拆分成若干细小的块。
代码高亮的处理。如果代码块很大，就会分成一个个小块，

取消当前所有的setTimeout
```js
(function() {
  var gid = setInterval(clearAllTimeouts, 0);
  function clearAllTimeouts() {
    var id = setTimeout(function() {}, 0);
    while (id > 0) {
      if (id !== gid) {
        clearTimeout(id);
      }
      id--;
    }
  }
})();
```

debounce（防抖动）方法，设置一个门槛值，表示两次Ajax通信的最小间隔时间。如果在设定的时间内，发生新的keydown事件，则不触发Ajax通信，并且重新开始计时。

```js
function debounce(fn, delay){
  var timer = null; // 声明计时器
  return function(){
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
    }, delay);
  };
}
// 用法示例
var todoChanges = debounce(batchLog, 1000);
```

现实中，最好不要设置太多个setTimeout和setInterval，它们耗费CPU。比较理想的做法是，将要推迟执行的代码都放在一个函数里，然后只对这个函数使用setTimeout或setInterval。

## 参考
[你所不知道的setTimeout](https://www.jeffjade.com/2016/01/10/2016-01-10-javacript-setTimeout/)

