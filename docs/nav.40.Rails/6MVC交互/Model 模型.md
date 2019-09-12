# Module

## 新建
```
# 生成 vote 表，并建立一列
rails generate model vote topic_id:integer
# 写入数据库
rake db:migrate

# 建立 Model: post，同时生成
# post 的二個欄位: content(text 文字屬性) 跟 group_id (integer 整數屬性)0
rails g model post content:text group_id:integer
rake db:migrate
```

## 查询

- rails console 控制台查询
```
rails c  # 命令行中进入控制台
first_user = User.first  # 查询第一个用户资料
first_user.microposts  # 查询关联表
```

- 设定 scope 查询，提高复用
```
class Product < ActiveRecord::Base
  scope :active, -> { where state: 'active' }
  scope :inactive, -> { where state: 'inactive' }
end
```

- 默认 scope scope 查询
```
default_scope { order('external_updated_at') }
```

- 模糊查询
```
hospitals = Hospital.where('name LIKE ?', "%#{name}%")
```

- 联合查询
```
  scope :filter_by_role, -> (role){
    .joins(:roles).where('roles.name' => role)
  }
```

- 模糊加联合
```
    includes(:user).where{(resumes.users.show_name =~  "%#{name}%")} if name.present?
```

- 查询某列，得到一个数组
```
Person.pluck(:id) # SELECT people.id FROM people
Person.uniq.pluck(:role) # SELECT DISTINCT role FROM people
Person.where(:confirmed => true).limit(5).pluck(:id)
```

## 设置字段serialize
- 避免数据库转译后出现 \反斜矼
```
    serialize :prepaid_detail, JSON
```

## 验证
```
#设置字段不能为空
validates :title, presence: true

#可以为某个 action 设置
validates :title, presence: true, on: :create

# 另一种写法
validates_presence_of :name
```

其中的validates_presence_of宣告了name這個屬性是必填
```
> e = Event.new
> e.save # 回傳 false
> e.errors.full_messages # 列出驗證失敗的原因
> e.name = 'ihower'
> e.save
> e.errors.full_messages # 儲存成功，變回空陣列 []
```

```
validates :price, presence: true
```
