const boboLog = require('./../Module/boboLog.js')

boboLog.section = '2.0 定义writable为 false'
{
  let person = {}
  Object.defineProperty(person, 'name', {
    writable: false,
    value: 'myName'
  })

  console.log(person.name)
  person.name = 'newName'
  Object.defineProperty(person, 'name', {
    Configurable: false,
    // value: 'myName2' 重复定义会报错
  })

  console.log(person.name)

  boboLog.hr = '读取属性'

  let descriptor = Object.getOwnPropertyDescriptor(person, 'name')
  console.log(descriptor)
  console.log(`myValue: ${descriptor.value}`)
  console.log(`myConfigurable: ${descriptor.configurable}`)
}


boboLog.section = '修改访问器'
{
  let book = {
    _year: 2004,
    edition: 1
  }

  Object.defineProperty(book, "abc", {
    get: function() {
      return this._year
    },
    set: function(newValue) {
      if(newValue > 2004) {
        this._year = newValue
        this.edition += this._year - 2004
      }
    }
  })

  book.abc = 2005
  console.log(book.edition)
}


boboLog.section = 'defineProperties 方式创建对象'
{
  let book = {}

  Object.defineProperties(book, {
    _year: {
      value: 2004,
      writable: true
    },
    edition: {
      value: 1
    },
    year: {
      get: function() {
        return this._year
      },
      set: function(newValue) {
        if(newValue > 2004) {

          this._year = newValue
          this.edition += newValue - 2004
        }
      }
    },

  })

  book.year = 2000
  console.log(book.year)

  boboLog.hr = '输入满足条件'

  book.year = 2016
  console.log(book.year)
}


boboLog.section = '查看 Object.defineProperty 创建的属性的特性'
{
  let book = {}

  Object.defineProperty(book, '_year', {
    value: 1212
  })

  Object.defineProperty(book, 'year', {
    get: function() {
      return this._year
    },

    set: function(newValue) {
      this._year = newValue
    },
  })

  console.log(Object.getOwnPropertyDescriptor(book, '_year'))
  console.log(Object.getOwnPropertyDescriptor(book, 'year'))
}
