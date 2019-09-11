// 模拟 Function.prototype.bind()
Function.prototype.mybind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function')
  }
  
  context = context instanceof Object ? context : {}
  context._func = this
  let res = context._func()
  delete context._func
  return res
}
