# Rails_常用命令

## Model

- 生成新模型
```
rails g model ExpectJob

rails g model user name:string
```


## Controller
```
# 生成控制器，指定两个 Action
rails generate controller StaticPages home help --no-test-framework

# 撤销生成
rails destroy  controller FooBars baz quux

# 生成 Restful Controller
rails generate controller webapp/resumes index create new destroy show

# 生成控制器，指定两个 Action
rails generate controller StaticPages home help --no-test-framework
```


## Migrate
```
# 为表添加一列
rails g migration add_image_to_paintings image:string

# 生成有 reference 关系的列
rails g migration AddUserToUploads user:references

# Migration檔案不需要和Model一一對應，像我們來新增一個Migration檔案來新增一個資料庫欄位
$ rails g migration add_status_to_events status:string
```

## 撤销某次生成
```
rails d .... # 删除上个命令生成文件
```
