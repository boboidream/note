# DataBase 数据库

## CRUD
CRUD指的是Create(新增)、Read(讀取)、Update(更新)、Delete(刪除)四種操作資料的基本方式。

將資料庫表格(table)對應到一個類別(class)
類別方法就是操作這個表格(table)，例如新增資料、多筆資料更新或多筆資料刪除資料
表中的一筆資料(row)對應到一個物件(object)物件方法就是操作這筆資料，例如更新或刪除這筆資料
資料表的欄位(column)就是物件的屬性(object attribute)
```
Model 类 => 数据库
Model 实例 => 表
实例方法 => 操作
实例属性 => 列
```

## 数据库配置文件
Rails的資料庫設定檔是config/database.yml

- development 開發模式，用在你的開發的時候
- test 測試模式，用在執行自動測試時
- production 正式上線模式，用在實際的上線運作環境

## 数据库前端工具Mac
- [Sequel](http://www.sequelpro.com/)

## SQL 语句
mysql -u用户名-p用户密码键入命令

  ```
  show databases;
  use meetup_develoopment;
  show tables;
  describe 表名;
  select * from 表名;
  ```
