# Ruby 基础知识

## 进入环境
```
irb #进入Ruby环境
puts #打印结果
7.class => Fixnum  # 在Ruby裡面，萬物皆有類別。通过`XX.class`查看
```



- 字符串
```
""  # 用双引号创建「字面量字符串」
"foobar" + "bar"  # 字符串连接

# (#{}) 插值操作
first_name = "Michael"
"#{first_name} Hartl" # Michael Hartl

# Ruby 不会对单引号插值
'\n'  # 得到的结果也是 "\\n" 单引号内就是字面量内容，免手动转义
```

- 打印字符串
```
puts "foo"  # 打印后会返回空的字面量
print "foo"  # 不会添加 \n
```

- 数组
```
"foo bar baz".split  # ["foo", "bar", "baz"]

"fooxbarxbazx".split('x')  # 用 x 进行分割

a.first
a.second  # Rails 扩展的
a.last  # synonym 别名系统

a[-1]  # 倒数第一个数

a.sort  # 排序
a.reverse  # 反转
a.shuffle #?

# 如果需要改变数组，那么使用 ！(bang)
a.sort!

a.push(6)  # 数组尾部添加数组
a << 7  # 尾部添加
a << "foo" << "bar"  # 串联添加

a.join(',')  # 连接操作

Array 可以直接相加
```

- Range
```

(0..9).to_a  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

a = %w[foo bar baz quux]  # ["foo", "bar", "baz", "quux"]

a[0..2]  # ["foo", "bar", "baz"]

('a'..'e').to_a  # ["a", "b", "c", "d", "e"]
```

- block
```
(1..5).each { |i| puts 2*i }  # 把块传给 each 方法；i 两侧| 用来定义块变量

(1..5).each do |i|  # 块的另一种写法；单行用花括号，多行用 do..end
  puts 2*1
end

3.times { puts "Betelguese!" } # 可以没有变量，执行三次

# 块是一个闭包

# map 返回的是每个元素执行后的结果，数组
(1..5).map { |i| i**2 }  # [1, 4, 9, 16, 25]

# 生成字母表数组，打乱数组，取出前8个元素，合并未字符串
('a'..'z').to_a.shuffle[0..7].join
```

## Hash 和 Symbol
Hash 本质就是数组，只是索引不局限于使用数字。且没有顺序

```
user = {} # 创建空 {}

user["first_name"] = "Michael"
.
.
user  # {"last_name"=>"Hartl", "first_name"=>"Michael"}

user = { "first_name" => "Michael", "last_name" => "Hartl"  } # hashrocket 定义方式

# Symbol 像没有约束的字符串，特有的数据类型，很容易比较，Hash 键的最佳选择
# Symbol 中不能使用 '-' 连字符
:name.split('')  # NoMethodError: undefined method `split' for :name:Symbol`

user = { :name => "Michael Hartl", :email => "michael@example.com"  }
user[:name]  # "Michael Hartl"

# Hash 的两种定义句法，等同
h2 = { name: "Michael Hartl", email: "michael@example.com"  }
h1 = { :name => "Michael Hartl", :email => "michael@example.com"  }
h2[:name]  # "Michael Hartl"

# Hash 值可以是任何对象
{:user=>{:name=>"Michael Hartl", :email=>"mhartl@example.com"}}

# Hash 有 each 方法，接收两个变量，key & value，以键值对为单位进行遍历
flash = { success: "It worked!", error: "It failed." }
flash.each do |key, value|
  puts "Key #{key.inspect} has value #{value.inspect}"
end

puts (1..5).to_a.inspect  # 输出一个数组字面量形式 [1, 2, 3, 4, 5]

puts :name, :name.inspect # name    :name

p :name  # :name  

```

## 方法
```
# 定义方法
def 方法名称(参数)
  方法内容
end

"foobar.length"  # 6 调用方法

"".empty?  # true

nil.to_s.empty?  #消息串联

nil  # 所有对象中，除了 false 本身，唯一一个布尔值为「假」

if 0  # true
```


## 流程控制
```
puts "x is not empty" if !x.empty?  # 条件后置
puts "The string '#{string}' is nonempty." unless string.empty?
```

## Ruby 类
- 构造器
```
>> s = "foobar" # 使用涮引号的字面构造器
=> "foobar"
>> s.class
=> String

s.class.superclass  # 查找 String 的父类，基类是 BasicObject

# 别名构造器
s = String.new("foobar")
a = Array.new([1, 3, 2])
h = Hash.new(0)  # 设置不存在的键返回 0
```

类上调用的方法，如 new 为类方法(class method)，实例上调用的方法为 实例方法(instance method)

```
# 检查单词反转后是否是本身，类中 self 代表对象本身
class Word < String
  def palindrome?
    self == self.reverse  # self 代表这个字符串本身
  end
end
```

- 扩充类
```
# blank < String
>> "".blank?
=> true
>> "      ".empty?
=> false
>> "      ".blank?
=> true
>> nil.blank?
=> true
```

- 实例变量
```
@开头的实例变量，用于类中不同方法之间传递变量。
Rails 中视图可自动获取
未定义则为空

# mass assignment 技术，用 Hash 初始化对象
user = User.new(name: "Michael Hartl", email: "mhartl@example.com")
```

- `rand(xxx)` 产生 xxx位随机数

