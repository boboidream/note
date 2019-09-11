const boboLog = require('./../Module/boboLog.js')
// 探究 JS 中，对象、函数的奥秘

// Object 为原生构造函数
console.log(typeof Object)


// 写入属性
{
  let book = {}

  Object.defineProperties(book, {
    _year: {
      value: 2010
    },
    edition: {
      value: 1,
      enumerable: true
    }
  })

  console.log(book)
  console.log(book.edition)
  console.log(Object.getOwnPropertyNames(book))
}


boboLog.section = 'person 实例研究'
{
  // 实例化一个对象
var person = new Object()
console.log(typeof person) // 结果：object

boboLog.hr = '查看其原型'
console.log(Object.getPrototypeOf(person)) // 结果：{}

boboLog.hr = '查看 person 实例的属性'
console.log(Object.getOwnPropertyNames(person))

let personPrototype = Object.getPrototypeOf(person)

console.log(
  Object.getOwnPropertyDescriptor(personPrototype, 'constructor')
)

Object.defineProperty(personPrototype, 'constructor', {
  enumerable: true
})

console.log(personPrototype)

boboLog.hr = '查看 Object 原型'
console.log(Object.prototype)
}

boboLog.section = '探究 Object 与 Array'

{
  function sayName() {

  }

  console.log(typeof sayName) // 结果：function

  console.log(sayName.toString())
  /*
  function sayName() {

  }
  */
  boboLog.hr = '查看 sayName 的属性'
  console.log(Object.getOwnPropertyNames(sayName))

  boboLog.hr = '原型与构造函数'
  console.log(Object.getPrototypeOf(sayName))
  console.log(Object.getPrototypeOf(sayName).constructor)

  boboLog.hr = 'Object 的原型'
  console.log(Object.prototype)

  boboLog.hr = '函数的原型'
  let functionPrototype = Function.prototype

  console.log(Function.prototype)
  console.log(Function.prototype.constructor)

  console.log(Object.getOwnPropertyNames(functionPrototype))
  console.log(Object.getPrototypeOf(functionPrototype))


  console.log(sayName instanceof Function)
  console.log(sayName instanceof Object)
  console.log(Function instanceof Object)
  console.log(Object instanceof Object)

  console.log(Object.getPrototypeOf(Object)) // [Function]
  console.log(Object.getPrototypeOf(Object).constructor) // [Function: Function]
  console.log(Object.getPrototypeOf({}) == Object.prototype) // true
  console.log(Object.getPrototypeOf({}) == Object.getPrototypeOf(Object)) //false
  console.log(Object.getPrototypeOf(Object) == Object.getPrototypeOf(Function))
}

boboLog.section = '查看原生构造函数的对象'
{
  console.log(Object.getPrototypeOf(Array.prototype))
  console.log(Object.getPrototypeOf(Array.prototype) == Object.prototype)
  console.log(Object.getPrototypeOf(Object.prototype))

  console.log(Object.getPrototypeOf(Object) === Function.prototype)

  console.log(Object.getPrototypeOf(Function) === Function.prototype)
}
