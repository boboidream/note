const boboLog = require('./../Module/boboLog.js')

boboLog.section = '原型链'

{
  function SuperType() {
    this.name = 'Super'
  }

  SuperType.prototype.getSuperName = function() {
    return this.name
  }

  function SubType() {
    this.subName = 'Sub'
  }

  SubType.prototype = new SuperType()
  SubType.prototype.getSubName = function() {
    return this.subName
  }

  // 实例化，继承之前两者所有属性
  let instance = new SubType()

  console.log(instance.name)
  console.log(instance.getSuperName())

  console.log(instance.subName)
  console.log(instance.getSubName())

  console.log(Object.getPrototypeOf(instance)) // SuperType 的实例 + 拓展方法
  console.log(instance.constructor === SuperType) // true

  boboLog.hr = '判断原型与实例的关系'
  // 只要迭代中 Object.getPrototypeOf(instance) == SubType.prototype
  console.log(instance instanceof SubType)
  console.log(instance instanceof SuperType)
  console.log(instance instanceof Object)
}


boboLog.section = '借用构造函数'

{
  function SuperType(name) {
    this.name = name
    this.sayName = function() {
      console.log(this.name)
    }
  }

  function SubType() {
    SuperType.call(this, 'John')

    this.age = 29
  }

  let instance = new SubType()

  console.log(instance.name)
  console.log(instance.age)
  instance.sayName()
}


boboLog.section = '组合继承'

{
  function SuperType(name) {
    this.name = name
    this.colors = ['red', 'green', 'yellow']
  }

  SuperType.prototype.sayName = function() {
    console.log(this.name)
  }

  function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
  }

  SubType.prototype = new SuperType()
  SubType.prototype.constructor = SubType
  SubType.prototype.sayAge = function() {
    console.log(this.age)
  }

  let instance1 = new SubType('john', 19)

  instance1.colors.push('black')

  let instance2 = new SubType('Allan', 22)

  console.log(instance1.colors)
  console.log(instance2.colors)
  console.log(Object.getPrototypeOf(instance2).name)
  console.log(Object.getPrototypeOf(instance2).colors)
}

boboLog.section = '原型式继承'

{
  let person = {
    name: 'john',
    friends: ['Hao', 'Ming']
  }

  let antherPerson = Object.create(person, {
    name: {
      value: 'Zing'
    }
  })

  let yetPerson = Object.create(antherPerson)

  console.log(antherPerson.name)
  console.log(antherPerson.friends)

  boboLog.hr = '原型链，继承父所有属性'
  console.log(yetPerson.name)
  console.log(yetPerson.friends)
  console.log(Object.getPrototypeOf(yetPerson))
}


boboLog.section = '寄生组合式继承'

{   function inheritPrototype(subType, superType) {
      let prototype = Object.create(superType.prototype)

      prototype.constructor = subType
      subType.prototype = prototype
    }


    function SuperType(name) {
      this.name = name
      this.colors = ['red', 'blue']
    }

    SuperType.prototype.sayName = function() {
      console.log(this.name)
    }

    SuperType.prototype.books = ['1', '2']

    // 完成实例属性的继承
    function SubType(name, age) {
      SuperType.call(this, name)

      this.age = age
    }

    inheritPrototype(SubType, SuperType)

    SubType.prototype.sayAge = function() {
      console.log(this.age)
    }

    // 测试
    let instance = new SubType('Ming', 19)

    console.log(SuperType.prototype)
    console.log(SubType.prototype)

    boboLog.hr = '查看构造函数'
    console.log(SuperType.prototype.constructor)
    console.log(SubType.prototype.constructor)
    instance.books.push(3)

    console.log(instance.books)

    let instance2 = new SuperType('Wang')
    console.log(instance2.books)
}
