# 三、MVC交互

## 概念
MVC，将域逻辑（domain logic）、业务逻辑（business logic）、表现逻辑（GUI）分开

REST 由 Roy Fielding 提出的概念，意思是表层状态转化，Representational State Transfer 

Resource 资源：设定用户数据模型 + 网页界面，把Users想象未对象，可以CRUD

控制器是一个中枢，所有程序都会通过它

## Model
Model 是一个Ruby对象，表示网站中的一个元素，并负责和数据库通信;常负责数据合法性验证
```
# 限制字段长度最大 140
class Micropst < ActiveRecord::Base
  validates :content, length: { maximum: 140 }
end
```

## View
```
#完整相对路径
app/views/static_pages/home.html.erb
```

## Controller
```
# 表示类的继承, (ApplicationController < ActionControllerController)
class UsersController < ApplicationController

# 调用了 User ActiveRecord 的库，一旦调用 @ 控制器就会调用视图代码
@users = User.all
```

## Action
```
GET # 读取一个网页
POST # 创建某个东西
PATCH # 更新
DELETE # 销毁
```

## REST 结构
```
  /users   index  GTE  主页

  /users  create  POST  新建新用户

  /users/1  show GET  显示ID为1的页面

  /users/1 update PATCH  更新

  /users/1  destroy  DELETE  删除

  /users/new new  GET  创建用户

  /users/1/edit  edit  GET  编辑用户
```

