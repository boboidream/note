const singletonTest1 = require('./singleton_es6.js')

var instance1 = singletonTest1.instance
var instance2 = singletonTest1.instance
console.log('instance1', instance1 === instance2)

const singletonTest2 = require('./singleton_es6_2')
var test1 = new singletonTest2({pointX: 8})
var test2 = new singletonTest2()
console.log('singletonTest2' ,test1.pointX === test2.pointX)