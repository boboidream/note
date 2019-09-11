/*
 * @Author: boboidream 
 * @Date: 2017-04-05 19:23:40 
 * @Last Modified by: boboidream
 * @Last Modified time: 2017-04-05 20:19:03
 */

var mediator = (function() {
  var topics = {}

  var subscribe = function(topic, fn) {
    if (!topics[topic]) {
      topics[topic] = []
    }

    topics[topic].push({
      context: this,
      callback: fn
    })

    console.log(this)
    return this
  }

  var publish = function(topic) {
    var args

    if (!topics[topic]) return false

    args = Array.prototype.slice.call(arguments, 1)

    for (var i = 0, l = topics[topic].length; i < l; i++) {
      var subscription = topics[topic][i]
      subscription.callback.apply(subscription.context, args)
      return this
    }
  }

  return {
      Publish: publish,
      Subscribe: subscribe,
      installTo: function(obj) {
        // 此时声明了函数，this 就是 mediator 对象
        console.log(this)
        obj.Subscribe = subscribe
        obj.Publish = publish
      }
    }
})();

mediator.Subscribe('click', function(num) {
  console.log(num)
})

mediator.Subscribe('run', function() {
  console.log('action:', 'run')
})

var mediator2 = {}
mediator.installTo(mediator2)

mediator.Publish('click', 11)
mediator2.Publish('run')