# Assets

## 引入不同类型文件，约定位置
```
app/assets  # 存放当前程序用到的资源文件
lib/assets  # 存放自己开发的代码库用到的资源文件
vendor/assets  # 第三方代码库用到的资源文件
```

## 全局 js css scss images 文件
    `application.js` 与 `application.css` 一般用于引入全局使用的 js 或 css

## 自己编写的 javascripts 或 stylesheets 文件
  - javascripts 文件
     通常针对产品的不同端（如web端、PC端、后台）等建立分离的管理文件，如`web_app.js`，`dashbord.js`等,引入其他文件的语法是
     ```
    # manage_file.js 中添加,引入文件
    //= require user
     ```
  如此一来，只需要在 `layout`文件中，引用 `manage_file`即可

  - stylesheets 文件
    样式文件引入有两种方式，第一种是 assets 方式，同 js 管理方式，也可以针对某端，建立单独的管理文件，如：`web_app.css`，引入其他 css 方式是：
    ```
    # 在文件头部，通过注释方式引入
    *= require jquery.Jcrop
    ```
    另一种方式更加优雅些，也是项目中在用的一种方式，通过 SCSS 的 `@import` 机制引入。要求管理文件后缀为`scss`或`sass` 只需要在头部添加
    ```
    @import 'my_css.scss'
    ```

## 第三方库的引入

Rails 管理第三方库的方法，与管理自己编写的文件稍有不同

1. 在项目根目录会发现有一个 `vendor` 文件夹，如果没有自己可以新建一个，其文件夹结构与 Assets 一模一样，如：`vendor/stylesheets/my_css.scss` 或 `vendor/javascripts/my_js.js`。
2. 在config/application.rb中加上如下配置项,才会启用Assets功能
    config.assets.enabled = true
3. 剩下的就和之前引用自己编写的文件方式一样啦。非常便捷

```
提醒：引入资源文件如 css,js,img 等都需重启服务器。另外，如果引入后报错，往往会提示你在某文件，通常是 config/assets 文件中添加某句话，照着提示一步步做就可以啦。
```


## 不启用 Assets 时，引入文件的做法
添加文件后需要在 `config/application.rb` 中添加，让 Asset Pipiline 兼容
```
require File.expand_path('../boot', __FILE__)
```

- [由于引用两次ujs导致remote submit twith](http://stackoverflow.com/questions/7411271/form-submitted-twice-due-to-remote-true)


## 预处理机制
foobar.js.erb.coffee  # 按照扩展名从右向左处理
asset pipeline 默认合并压缩 css/js 文件

## SCSS
```
&:hover {  # 引用父标签
  ...
}

Bootstrap 中有颜色变量，以@开头，可直接在 SCSS 中替换$ 使用
```
