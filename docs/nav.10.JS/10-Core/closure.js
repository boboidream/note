// 闭包
function outer() {
  var private_val_1 = { val: 1 },
    private_val_2 = { val: 2 }

  function inner() {
    var inner_val_1 = private_val_1

    console.log(private_val_2)
  }

  return inner
}

// var closure = outer()
// closure() // { val: 2 }

// 返回对象
var obj1 = { val: 3 }
function outer2() {
  var private_val_1 = obj1
      private_val_2 = { val: 2 }
  
  var inner = {
    inner_val_1: private_val_1
  }

  return inner
}
// ++obj1.val

var res2 = outer2()

res2.inner_val_1.val = 5
console.log(res2)
console.log(obj1)

function testThis() {
  this.abc = '1111'

  var abc = '12'

  console.log(this.abc)
}

testThis()