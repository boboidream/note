// Singleton 单例
const singleton = Symbol()
// prevent new SingletonTester() directily
const singletonEnforcer = Symbol()

class SingletonTester {
  constructor(enforcer) {
    if(enforcer != singletonEnforcer) throw "Cannot const singleton."

    this.pointX = 6 
    this.pointY = 7
  }

  static get instance() {
    if(!this[singleton]) {
      this[singleton] = new SingletonTester(singletonEnforcer)
    }
    return this[singleton]
  }
} 

module.exports = SingletonTester