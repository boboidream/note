# ES6
ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";

## class
类本质是特殊的 function，用 class 定义，不存在变量提升。 
```js
// 类声明方式
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// 表达式声明方式
// unnamed
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

### static methods
1. 不实例化时，可以调用
2. 实例化时，不能被调用
3. 被调用内部无 `this` 定义

## 数组扩展
```js
Object.assign(target, resource, resource)
```

剩余参数
```js
function(a, b, ...args) {
  var normalArray = args;
}

function f(...[a, b, c]) {
  return a + b + c;
}
```

## 解构赋值
通过解构赋值, 可以将属性/值从对象/数组中取出,赋值给其他变量。
```js
// 解构数组
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

// 解构对象
var a, b;

({a, b} = {a: 1, b: 2});
```

::: tip
赋值语句周围的圆括号 ( ... ) 在使用对象字面量无声明解构赋值时是必须的。

{a, b} = {a: 1, b: 2} 不是有效的独立语法，因为左边的 {a, b} 被认为是一个块而不是对象字面量。

然而，({a, b} = {a: 1, b: 2}) 是有效的，正如 var {a, b} = {a: 1, b: 2}

你的 ( ... ) 表达式之前需要有一个分号，否则它可能会被当成上一行中的函数执行。
:::



### 学习资料
- [深入解析 ES6：Symbol](http://bubkoo.com/2015/07/24/es6-in-depth-symbols/)
- [解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
