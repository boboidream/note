// call和 apply改变了函数的this上下文后便执行该函数,而bind则是返回改变了上下文后的一个函数。
// call从第二个参数开始以参数列表的形式展现，apply则是把除了改变上下文对象的参数放在一个数组
Function.prototype.myapply = function(context, array) {
  if (typeof context == 'object') {
    context = context || window
  } else {
    context = new Object(null)
  }

  let args = array ? array : []
  let _fn = Symbol()
  let res

  context[_fn] = this
  res = context[_fn](...args)
  delete context[_fn]
  return res
}

Function.prototype.mycall = function(context, ...args) {
  if (typeof context == 'object') {
    context = context || window
  } else {
    context = new Object(null)
  }

  let _fn = Symbol()
  let res

  context[_fn] = this
  res = context[_fn](...args)
  delete context[_fn]
  return res
}

