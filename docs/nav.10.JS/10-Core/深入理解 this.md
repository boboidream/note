# 深入理解 this
## 是什么
this 是 JS 中的动态作用域机制, 具体来说有四种, 优先级有低到高分别如下:
1. 默认的 this 绑定, 就是说 在一个函数中使用了 this, 但是没有为 this 绑定对象. 这种情况下, 非严格默认, this 就是全局变量 Node 环境中的 global, 浏览器环境中的 window.严格模式下 this 指向 undefined.
2. 隐式绑定: 使用 obj.foo() 这样的语法来调用函数的时候, 函数 foo 中的 this 绑定到 obj 对象.
3. 显示绑定: foo.call(obj, ...), foo.apply(obj,[...]), foo.bind(obj,...)
4. 构造绑定: new foo() , 这种情况, 无论 foo 是否做了绑定, 都要创建一个新的对象, 然后 foo 中的 this 引用这个对象.

```js
const a = 1
const obj = {
  a: 2,
  func: function() {
    console.log(this.a)
  }
}
const b = obj.func

b() // undefined
obj.func() // 2
```

## 为什么
引擎会将函数单独保存在内存中，然后再将函数的地址赋值给foo属性的value属性。
![函数](./img/bg2018061803.png)

因此，函数可以在不同的运行环境执行，为在函数体内部获得当前的运行环境（context）而设计 this。它的设计目的就是在函数体内部，指代函数当前的运行环境。

一旦 `const b = obj.func`，变量 `foo` 就直接指向函数本身，所以 `foo()` 就变成在全局环境执行。
