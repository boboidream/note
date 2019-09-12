## IRB 互动环境

```
$ irb
```
Ruby是個動態強分型的直譯式程式語言

## 字符类型

- 整数 Integer ,任何整数都是 `Fixnum` 对象。运算结果为整数

- 浮点数 `Float` 对象

- `String`对象 单双引号括起来，字串不能直接跟數字相加，會發生例外錯誤

```


var1 = 'stop'
var2 = 'foobar'
var3 = "aAbBcC"

puts var1.reverse # pots
puts var2.length # 6
puts var3.upcase # AABBCC
puts var3.downcase # aabbcc

# 内插模式
verb = 'work'
where = 'office'

# 双引号字符串
puts "I #{verb} at the #{where}" # 輸出 I work at the office
```



- 类型转换

```

# 相加前需要手动转换

to_s(轉成字串)

to_i(轉成整數)

to_f(轉成浮點數)

```



- 区域变量

區域變數使用小寫開頭，偏好單字之間以底線_來分隔。範例如下：

```


composer = 'Mozart'
puts composer + ' was "da bomb", in his day.'

my_composer = 'Beethoven'
puts 'But I prefer ' + my_composer + ', personally.'
```



- Constant 常数

```

# 大寫開頭的是為常數

Foo = 1
Foo = 2 # (irb):3: warning: already initialized constant Foo

RUBY_PLATFORM # => "x86_64-darwin10.7.0"
ENV # => { "PATH" => "....", "LC_ALL" => "zh_TW.UTF-8" }
```



- 空值 nil

```

# 表示未設定值、未定義的狀態：


nil # nil
nil.class # NilClass

nil.nil? # true
42.nil? # false

nil == nil # true
false == nil # false
```

- Ruby偏好一律使用單行註解：



- Symbols 字串符號

```

# 是唯一且不會變動的識別名稱，用冒號開頭.

# 相同名稱的Symbol不會再重複建構物件，所以使用Symbol可以執行的更有效率。


:this_is_a_symbol
相同名稱的Symbol不會再重複建構物件，所以使用Symbol可以執行的更有效率。


puts "foobar".object_id      # 輸出 2151854740
puts "foobar".object_id      # 輸出 2151830100
```



- Array 数组

```

# 可放任意类型
a = [ 1, "cat", 3.14 ]

puts a[0] # 輸出 1
puts a.size # 輸出 3
# inspect方法會將物件轉成適合給人看的字串
puts a.inspect # 輸出 [1, "cat", nil]

colors = ["red", "blue"]

colors.push("black")
colors << "white"
puts colors.join(", ") # red, blue, black, white

colors.pop
puts colors.last #black
```



```

languages = ['Ruby', 'Javascript', 'Perl']

languages.each do |lang|
  puts 'I love ' + lang + '!'
end

# I Love Ruby!
# I Love Javascript!
# I Love Perl!
```



- Hash 

Hash是一種鍵值對(Key-Value)的資料結構，雖然你可以使用任何物件當作Key，但是通常我們使用Symbol當作Key。

```


config = { foo: 123, bar: 456 } # 等同於 { :foo => 123, :bar => 456 }

# each
config = { :foo => 123, :bar => 456 }
config.each do |key, value|
  puts "#{key} is #{value}"
end
```



## 流程控制

- 比较

```


puts 1 > 2 # 大於
puts 1 < 2 # 小於
puts 5 >= 5 # 大於等於
puts 5 <= 4 # 小於等於
puts 1 == 1 # 等於
puts 2 != 1 # 不等於

puts ( 2 > 1 ) && ( 2 > 3 ) # 和
puts ( 2 > 1 ) || ( 2 > 3 ) # 或
```

- if

```


total = 26000

if total > 100000
  puts "large account"
elsif total > 25000
  puts "medium account"
else
  puts "small account"
end

# 只有一行
puts "greater than ten" if total > 10
```



- 三元运算符

```


x = 3
y = ( x > 3 ) ? "foo" : "bar"
```



- Case 

```


case name
  when "John"
    puts "Howdy John!"
  when "Ryan"
    puts "Whatz up Ryan!"
  else
    puts "Hi #{name}!"
end
```



- while, loop, until, next and break



- 正则

```

# 抓出手機號碼
phone = "123-456-7890"
if phone =~ /(\d{3})-(\d{3})-(\d{4})/
  ext  = $1
  city = $2
  num  = $3
end
```



- 函数

```

# 方法中的return是可以省略的，Ruby就會回傳最後一行運算的值
def say_hello(name)
  "Hi, " + name
end

puts say_hello('ihower')
# 輸出 Hi, ihower

# 呼叫方法時，括號也是可以省略的
say_hello 'ihower'
```



- ?與!的慣例

方法名稱可以用?或!結尾，前者表示會回傳Boolean值



## 对象导向

Ruby的類別其實也是一種常數，所以也是大寫開頭，使用new方法可以建立出物件

- 自定义类

```


class Person # 大寫開頭的常數

  def initialize(name) # 建構式
    @name = name # 物件變數
  end

  def say(word)
    puts "#{word}, #{@name}" # 字串相加
  end

end

p1 = Person.new("ihower")
p2 = Person.new("ihover")

p1.say("Hello") # 輸出 Hello, ihower
p2.say("Hello") # 輸出 Hello, ihover
```



- 定义类的方法和变量

```


class Person

  @@name = “ihower” # 類別變數

  def self.say # 類別方法
    puts @@name
  end

end

Person.say # 輸出 ihower
```



- 资料变量

```

所有的物件變數(@開頭)、類別變數(@@開頭)，都是封裝在類別內部的，類別外無法存取：


class Person
  def initialize(name)
    @name = name
  end
end

p = Person.new('ihower')
p.name                      # 出現 NoMethodError 錯誤
p.name = 'peny'             # 出現 NoMethodError 錯誤
```

- 可通过定义方法，读取内部变量

```

# attr_accessor、attr_writer、attr_reader類別方法可以直接定義這些方法。


class Person
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

p = Person.new('ihower')
```

跟其他程式語言不太一樣，Ruby的類別層級內也可以執行程式

```


class Demo
  puts "foobar"
end

# 當你載入這個類別的時候，就會執行puts "foobar"輸出foobar
```



## 方法的封装

類別中的方法預設是public的，宣告private或protected的話，該行以下的方法就會套用：


class MyClass

  def public_method
  end

  private

  def private_method_1
  end

  def private_method_2
  end

  protected

  def protected_method
  end

end
兩著差別在於private只有在物件內部才能呼叫，預設的接收者(receiver)就是物件本身，也就是self。而protected方法除了可以在本身內部呼叫以外，還可以被子類別的物件、或是另一個相同類別的物件呼叫。

```

object.call_method的意思是object收到執行call_method的指令，

你甚至可以改寫成object.__send__(:call_method)

```



## Class 继承


Ruby使用小於<符號代表類別繼承：

class Pet
  attr_accessor :name, :age

  def say(word)
    puts "Say: #{word}"
  end
end

class Cat < Pet
  def say(word)
    puts "Meow~"
    super
  end
end

class Dog < Pet
  def say(word, person)
    puts "Bark at #{person}!"
    super(word)
  end
end

Cat.new.say("Hi")
Dog.new.say("Hi", "ihower")
輸出

Meow~
Say: Hi
Bark at ihower!
Say: Hi
這個範例中，Cat和Dog子類別覆寫了Pet say方法，其中的super是用來呼叫被覆寫掉的Pet say方法。另外，沒有括號的super和有括號的super()是有差異的，前者Ruby會自動將所有參數都代進去來呼叫父類別的方法，後者則是自己指定參數。此例中如果Dog say裡只寫super，則會發生wrong number of arguments的錯誤，這是因為Ruby會傳say("Hi", "ihower")給Pet say而發生錯誤。

## Module

它跟Class類別非常相似，你可以在裡面定義方法。只是你不能用new來建立它。

```


module MyUtil

  def self.foobar
    puts "foobar"
  end

end

MyUtil.foobar
# 輸出 foobar
```


首先是debug.rb

```

module Debug
  def who_am_i?
    puts "#{self.class.name}: #{self.inspect}"
  end
end
```

然後是foobar.rb

```

require "./debug"
class Foo
  include Debug # 這個動作叫做 Mixin
end

class Bar
  include Debug
end

f = Foo.new
b = Bar.new
f.who_am_i? # 輸出 Foo: #<Foo:0x00000102829170>
b.who_am_i? # 輸出 Bar: #<Bar:0x00000102825b88>
```

Ruby使用Module來解決多重繼承的問題，



## Iterator 迭代器

例如each是一個陣列的方法，它會走訪其中的元素，其中的do ... end是each方法的參數，稱作Code Block，是一個匿名函式(anonymous function)

```

languages = ['Ruby', 'Javascript', 'Perl']
languages.each do |lang|
  puts "I love #{lang}!"
end
# I Love Ruby!
# I Love Javascript!
# I Love Perl!
```
```
# 反覆三次
3.times do
  puts 'Good Job!'
end
# Good Job!
# Good Job!
# Good Job!

# 從一數到九
1.upto(9) do |x|
  puts x
end

# 多一個索引區塊變數
languages = ['Ruby', 'Javascript', 'Perl']
languages.each_with_index do |lang, i|
    puts "#{i}, I love #{lang}!"
end
# 0, I Love Ruby!
# 1, I Love Javascript!
# 2, I Love Perl!
```
(Code block)的形式除了do ... end，也可以改用大括號。通常單行會會用大括號，多行會用do ... end的形式。


```
3.times { puts "Hello" }
```

```
# 迭代並造出另一個陣列
a = ["a", "b", "c", "d"]
b = a.map {|x| x + "!" }
puts b.inspect

# 結果是 ["a!", "b!", "c!", "d!"]

# 找出符合條件的值
b = [1, 2, 3].find_all{ |x| x % 2 == 0 }
b.inspect
# 結果是 [2]

# 迭代並根據條件刪除
a = [51, 101, 256]
a.delete_if {|x| x >= 100 }
# 結果是 [51]

# 客製化排序
[2, 1, 3].sort! { |a, b| b <=> a }
# 結果是 [3, 2, 1]

# 計算總和
(5..10).inject {|sum, n| sum + n }
# 結果是 45

# 找出最長字串find the longest word
longest = ["cat", "sheep", "bear"].inject do |memo, word|
  ( memo.length > word.length ) ? memo : word
end
# 結果是 "sheep"
```


## Yield

在方法中使用yield可以執行Code block參數：


```
# 定義方法
def call_block
  puts "Start"
  yield
  yield
  puts "End"
end

call_block { puts "Blocks are cool!" }
# 輸出
# "Start"
# "Blocks are cool!"
# "Blocks are cool!"
# "End"
```


## 例外处理

```
begin
  puts 10 / 0 # 這會丟出 ZeroDivisionError 的例外錯誤
rescue => e
  puts e.class # 如果發生例外會執行 rescue 這一段
ensure
  # 無論有沒有發生例外，ensure 這一段都一定會執行
end
# 輸出 ZeroDivisionError
```
```
raise "Not works!!"
# 丟出一個 RuntimeError

# 自行自定例外物件
class MyException < RuntimeError
end

raise MyException
```


## Introspection 反射机制

```
# 這個物件有什麼方法
Object.methods
=> ["send", "name", "class_eval", "object_id", "new", "singleton_methods", ...]

# 這個物件有這個方法嗎？
Object.respond_to? :name
=> true
```

## 常见惯例
```
result ||= a
```

如果result是nil或false的話，將a指派給result，如果不是的話，什麼都不做。以上這段程式等同於
