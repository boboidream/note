var SingletonTester = (function() {
  // 构造函数
  function Singleton(opts) {
    opts = opts || {}

    this.name = 'SingletonTester'
    this.pointX = opts.pointX || 6
    this.pointY = opts.pointY || 10
  }

  // 单例
  var instance
  // 初始化函数
  var _static = {
    name: 'SingletonTester',
    getInstance: function(opts) {
      if (instance === undefined) {
        instance = new Singleton(opts)
      }
      return instance
    }
  }

  return _static
})()

var singletonTest = SingletonTester.getInstance({pointX: 7})
var singletonTest2 = SingletonTester.getInstance({pointX: 8})

console.log(singletonTest.pointX)
console.log(singletonTest2.pointX)

