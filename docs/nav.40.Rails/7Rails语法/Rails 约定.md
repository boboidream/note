# 约定

## 命名
```
类名采用--驼峰式
文件名采用--蛇底式
```
- Model 命名
  > 这里的 class 命名是很关键的，如果数据库中的表名是 issues 那这里的 class 名就必须是 Issue，也就是首字母大写，同时变成单数。
  为啥要这样？ 因为这样 Rails 就可以建立自动的 class 到 table 的映射关系了，以后要操作 issues 这张表，就无比的方便。
  在 Rails 中，模型的名字使用单数，对应的数据表名使用复数。
```
  class Issue < ActiveRecord::Base
  end
  依照RESTful設計的慣例，所有的Controller命名都是複數，而檔案名稱依照慣例都是{name}_controller.rb
```

## 空格
```
# 花括号左右加入空格
{ "first_name" => "Michael", "last_name" => "Hartl"  }
```

## 括号
Ruby 中，括号可以省略
```
# Parentheses on function calls are optional.
stylesheet_link_tag("application", media: "all",
                                   "data-turbolinks-track" => true)
stylesheet_link_tag "application", media: "all",
                              "data-turbolinks-track" => true
```
- 如果Hash是最后一个参数，它的花括号也是可以省略的
```
# Curly braces on final hash arguments are optional.
stylesheet_link_tag "application", { media: "all",
                                     "data-turbolinks-track" => true }
stylesheet_link_tag "application", media: "all",
                                   "data-turbolinks-track" => true
```

## 代码长度
每行代码不要超过 80 列。
