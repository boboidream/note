# Controller

## redirect_to
```
redirect_to controller: "merchants",action: "show", notice: "餐厅信息更新成功！"
redirect_to :back, notice: "恭喜您，删除成功！"
```

## 获得数据
- 从关链表中取出数据
    ```
    def show
        @group = Group.find(params[:id])
        @posts = @group.posts
    end
    ```
- 如果不存在就新建一条数据
    ```
    resume = Resume.where(user_id: current_user.id).first_or_create!
    ```

## 写入数据库
- `build(app)` = `new(app)` # 别名？


## 更新某属性
```
 user.update_attribute :admin, true
```

## 权限控制
- [Rails 应用开发笔记（四）](http://liuzxc.github.io/articles/rails-app-study-04/)

```
  def require_admin
    if not admin?
      flash[:error] = "您没有权限操作！"
      redirect_to home_path
    end
  end
```

> before_action 和 before_filter 的区别 before_action 和 before_filter 其实是一个东西，只是在 Rails4.0 之前使用的是 before_filter，之后改成了 before_action，相当于功能一样，只是名字不同而已。

## Strong Params
```
params.require(:person).permit(:name, :age)
```

## render partial

```
#多用于，接收到 ajax 回传后，再次渲染局部模板，可带参数 如：`@comment`
$('#comments ul.comments').append("<%= escape_javascript render(:partial => 'comments/single', :locals => { :c => @comment }) %>");
```
## create 与 create!

其中create和create!就等於new完就save和save!，
有無驚嘆號的差別在於validate資料驗證不正確的動作，無驚嘆號版本會回傳布林值(true或false)，有驚嘆號版本則是驗證錯誤會丟出例外。


## refresh
```
# 原来页面
session[:return_to] ||= request.referer

# update页面
redirect_to session.delete(:return_to)
```
