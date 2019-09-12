# rake task

## 在task 文件中引入 Helper 方法
- [Method namespace clashing when running rake tasks in Rails](http://stackoverflow.com/questions/7180732/method-namespace-clashing-when-running-rake-tasks-in-rails)

- [Where to put helper functions for rake tasks and test files in Ruby on Rails?](http://stackoverflow.com/questions/15163750/where-to-put-helper-functions-for-rake-tasks-and-test-files-in-ruby-on-rails)

- 第一种方案
```
require "#{Rails.root}/app/helpers/guangfa/gf_server_adapter_helper"
include Guangfa::GfServerAdapterHelper

```
注意两点，如果存在 namespace 则需要在 task 函数内部引用，不然会 namespace 报错。

- 或者还有一种解决方案，通过 Class 调用Helper
```
class HelperFunctions

     def self.random_address
          [Faker::Address.street_address, Faker::Address.city].join("\n")
     end

     def self.otherFunction
     end
end
```
