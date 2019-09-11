// 利用typeof除了array和null判断为object外，其他的都可以正常判断
alert(typeof []); // "object" 

// 当你在多个frame中来回穿梭的时候，这两种方法就亚历山大了。由于每个iframe都有一套自己的执行环境，
// 跨frame实例化的对象彼此是不共享原型链的，因此导致上述检测代码失效
alert(arr instanceof Array); // true 
alert(arr.constructor === Array); // true 

// Object.prototype.toString的行为：首先，取得对象的一个内部属性[[Class]]，
// 然后依据这个属性，返回一个类似于"[object Array]"的字符串作为结果
Object.prototype.toString.call(o) === '[object Array]';

function isArrayFn(o) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(o)
  } else {
    return Object.prototype.toString.call(o) === '[object Array]'
  }
}
