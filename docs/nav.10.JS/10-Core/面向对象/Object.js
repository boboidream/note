const boboLog = require('./../Module/boboLog.js')
// import { boboLog } from './../Module/boboLog'


boboLog.section = '1.0 实例化 Object 方式创建对象'
{
  let person = new Object()

  person.name = "john"
  person.age = 18
  person.sayName = function() {
    console.log(`My name is ${this.name}.`)
  }

  person.sayName()
}

boboLog.section = '1.1 工厂模式'
{
  function createPerson(name, age, job) {
    let o = new Object

    o.name = name
    o.age = age
    o.job = job
    o.sayName = function() {
      console.log(this.name)
    }

    return o
  }

  let john = createPerson('john', 18, 'student'),
      block_obj = new Object

  john.sayName()
  console.log(john.constructor == Object) // true
  console.log(john.sayName.prototype) // {} 每一个函数才有 prototype 原型
  console.log(Object.getOwnPropertyNames(john)) // [ 'name', 'age', 'job', 'sayName' ]
  console.log(Object.getOwnPropertyNames(block_obj)) // []
  console.log(Object.getOwnPropertyNames(john.sayName)) // [ 'length', 'name', 'arguments', 'caller', 'prototype' ]
}

boboLog.section = '1.2 构造函数模式'
{
  function Person(name, age, job) {
    this.name = name
    this.age = age
    this.job = job

    this.sayName = function() {
      console.log(this.name)
    }
  }

  var person1 = new Person('john', 18, 'student')

  person1.sayName()
  boboLog.hr = '判断是谁的实例'
  console.log(person1 instanceof Object)
  console.log(person1 instanceof Person)

  boboLog.hr = 'Object.keys()'
  console.log(Object.keys(person1))

  boboLog.hr = 'getOwnpropertyNames'
  console.log(Object.getOwnPropertyNames(person1)) // 返回所有属性

  boboLog.hr = '原型'
  console.log(Object.getOwnPropertyNames(person1.constructor.prototype))
}

boboLog.section = '1.3 原型模式'
{
  function Person() {
  }

  Person.prototype.name = 'Mike'
  Person.prototype.age = 18
  Person.prototype.job = 'student'
  Person.prototype.friends = ['Zhang', 'Wang']
  Person.prototype.sayName = function() {
    console.log(this.name)
  }

  var person1 = new Person()

  person1.sayName()

  var person2 = new Person()
  person2.name = 'Allen'
  person2.friends.push('Li')

  boboLog.hr = '实例对象属性'
  person2.sayName() // 实例属性只能屏蔽原型属性，不能修改
  console.log(person2.hasOwnProperty('name')) // 判断是否具有此实例属性
  console.log(person1.friends) // 当属性为引用类型时，公共属性被修改

  boboLog.hr
  delete person2.name
  console.log('person2 是否具有name实例属性：' + person2.hasOwnProperty('name'))
  console.log('person2 具有属性 name in person2：' + ('name' in person2))
  console.log(Object.getOwnPropertyDescriptor(person2, 'name')) // 实例读取不到原型属性的描述符
  console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(person2), 'constructor')) // 读取原型描述符
  console.log('in 是否可以读取到不可枚举属性：' + ('constructor' in person2))
  console.log(person2.name) // 指回原型属性

  boboLog.hr = '函数的原型对象'
  console.log(Person.prototype) // 原型对象
  console.log(Object.getPrototypeOf(person2)) // 通过实例 [[prototype]] 获取原型

  boboLog.hr = '原型对象属性'
  console.log(Object.getOwnPropertyNames(Person.prototype)) // 原型对象属性
  console.log(Person.prototype.constructor.name) // 指回函数
  console.log(Person.prototype.isPrototypeOf(person2)) // 判断是否为某函数原型

  boboLog.hr = 'Object实例属性'
  objectInstance = {}
  for(let prop in objectInstance) {
    console.log('不可枚举' + prop)
  }

  console.log('toString' in objectInstance)
  console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(objectInstance)))

  boboLog.hr = '探究 Object 的构造器'
  console.log(typeof Object)
  console.log(Object.getPrototypeOf(Object))
  console.log(Object.getPrototypeOf(Object).toString())

  boboLog.hr = 'Object的函数原型'
  console.log(Object.prototype)
  console.log(Object.prototype.__proto__)
  console.log(Object.getOwnPropertyNames(Object.prototype))

  boboLog.hr
  console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Object)))
  console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object), 'constructor'))
}


boboLog.section = '1.4 构造函数与原型模式'

{
  function Person(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.friends = ['shell', 'court']
  }

  Person.prototype = {
    constructor: Person,
    sayName: function() {
      console.log(this.name)
    }
  }

  var person1 = new Person('Mike', 19, 'student'),
      person2 = new Person('Nick', 18, 'teacher')

  person1.friends.push('Wang')

  console.log(person1.friends)
  console.log(person2.friends)
}


boboLog.section = '1.5 动态原型模式'

{
  function Person(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    console.log(typeof this.sayName)
    if(typeof this.sayName != "function") {
      Person.prototype.sayName = function() {
        console.log(this.name)
      }
    }
  }

  let person1 = new Person('Ming', 19, 'student'),
      person2 = new Person('Xiao', 17, 'teacher')

  person1.sayName()
  person2.sayName()
}

boboLog.section = '1.6 寄生构造模式'

{
  function Person(name, age, job) {
    let o = new Object()

    o.name = name
    o.age = age
    o.job = job
    o.sayName = function() {
      console.log(this.name)
    }

    return o
  }

  let friend = new Person('Ming', 18, 'teacher')

  friend.sayName()
}

boboLog.section = '1.7 稳妥构造函数模式'

{
  function Person(name, age, job) {
    let o = new Object(),
        my_age = age

    name = name + '_主任'

    o.sayName = function() {
      console.log(name)
    } // 只开放了这一个接口，即构造的对象只能访问限定的数据

    return o
  }

  let friend = Person('Ming', 11, 'student')

  friend.sayName()

  Object.getPrototypeOf(friend).sayAge = function() {
    console.log(this.my_age)
  }

  friend.sayAge()
}
