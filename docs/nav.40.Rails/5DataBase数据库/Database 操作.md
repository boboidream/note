# DataBase
```
# 数据库迁移
rake db:migrate

# 撤销迁移
rake db:rollback

# 回滚到任意版本
rake db:migrate VERSION=0

# 重置数据库
rake db:drop db:create db:migrate

# 运行 seed 文件
reke db:seed
```

## 数据库操作
- CRUD
  ```
  # 新增
  > event = Event.new
  > event.name = "Ruby course"
  > event.description = "fooobarrr"
  > event.capacity = 20
  > event.save # 儲存進資料庫，讀者可以觀察另一個指令視窗
  > event.id # 輸出主鍵 1，在 Rails 中的主鍵皆為自動遞增的整數 ID

  > event = Event.new( :name => "another ruby course", :capacity => 30)
  > event.save
  > event.id # 輸出主鍵 2，這是第二筆資料

  # 查詢
  > event = Event.where( :capacity => 20 ).first
  > events = Event.where( ["capacity >= ?", 20 ] ).limit(3).order("id desc")

  # 更新
  > e = Event.find(1) # 找到主鍵為 1 的資料
  > e.name # 輸出 Ruby course
  > e.update( :name => 'abc', :is_public => false )

  # 刪除
  > e.destroy
  ```

- 常用操作
  ```
  rails generate model User name:string email:string  # 生成数据库使用 模型User 单数

  # 模型表现的单个用户特征，而表储存了多个数据，用复数

  rails console --sandbox  # rails c 中的沙盒模型，退出后不保存结果

   User.create(name: "A Nother", email: "another@example.org")

   User.find_by(email: "mhartl@example.com")  # 4.0 开始，推荐使用 find_by 查询属性记录

   user.reload.email  # 重新加载对象
  ```

- update
```
# 直接属性赋值
user.email = "foo@bar.com"

# update_attributes
user.update_attributes(name: "The Dude", email: "dude@abides.org")  # 接收一个 Hash
```

## 拼接结果
```
# author: bobo
module MerchantHelper

  # 按名称和地址搜索商户
  def search_by_name_address(name, address, page)
    p name.to_s + '--------'
    datas = []
    unless name.nil? && address.nil?
      page = page ? page.to_i : 1
      merchants_res = Merchant.where("name LIKE ? AND address LIKE ?", "%#{name}%", "%#{address}%").paginate(page:page,per_page:10)
      merchants_res.each do |f|
        count = f.restaurants.length
        merchant_res = f.as_json
        merchant_res["count"] = count
        datas.push(merchant_res)
      end
    end
    return datas
  end

end
```

- as json 后一定要 ["双引号引用"]
- [as_json](http://apidock.com/rails/ActiveModel/Serializers/JSON/as_json)
  > as_json is used to create the structure of the JSON as a Hash

## Rails c
  ```
  #修改某条数据
  u = User.find 6
  u.merchant_id = 1
  u.save
  ```

## 数据库查询合并
  ```
  @items = tagged_items | searched_items
  items = (tagged_items + searched_items).unique
  ```

## ruby -w 调错模式
```
你可以單獨用ruby -w去執行發生錯誤的程式，例如ruby -w app/controller/welcome_controller，這會打開Ruby的警告模式來獲得更準確的語法錯誤訊息。
```

# DataBase 操作

## 更新数据库
```
# 仅更新某列，过滤验证
apply_record.update_columns(resume_status: params[:resume_status])
```

## Rails c 控制台常用操作
1. 删除数据
  ```
  # 单条数据
  MyTable.find(1).delete

  # 多条数据
  MyTalbe.where(user_id: 1).delete_all
  ```


  ##

  ```
  Post.where(published: true).joins(:comments).merge( Comment.where(spam: false) )
  ```
