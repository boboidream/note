# AJAX

0. 须调用 jquery_ujs
可在application.erb里加
 ```
   //= require jquery_ujs
 ```
1. 控制器
```
unless items.nil?
  render json: {status: 'failed', alert: '查询数据为空'} and return
end

render json: {status: 'success', value: items}
```

2. 页面


- [Rails 开发：那些年，我们一起踩过的坑](http://talkcool.info/?p=19)
-  pipiline
```
$(document).on 'page:load', ->if page is scrollPage   # pseudo code
    $(window).bind 'scroll', customScrollFunction$(document).one 'page:change', ->$(window).unbind 'scroll', customScrollFunction
```

3. 解决了ajax必须刷新才能加载问题
```
# 删除此插件，或者 JS 使用 page_change
//= require turbolinks
```

4. 401 权限限制问题
- 第一种方案
```
# 关闭此 action 的 frogery 功能
protect_from_forgery :except => [:create]
```

- 第二种方案
 [protect_from_forgery & Unobtrusive Javascript](http://stackoverflow.com/questions/731504/protect-from-forgery-unobtrusive-javascript)
```
<script>
  function authToken() {
    return '<%= form_authenticity_token if protect_against_forgery? -%>';
  }


$.ajax({
    type: 'put',
    url:  url,
    data: { foo: bar,
            authenticity_token: authtoken()
          },
    complete: function(data) {}
})
</script>
```

4. 返回json
```
render json: '审批失败，检查您是否勾选职位', status: 403


      render json: {
        success: true,
        info: '审批成功',
        jobs: @jobs
      }, status: 200
```


## ajax submit form
```
// this is the id of the form
$("#idForm").submit(function(e) {

    var url = "path/to/your/script.php"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#idForm").serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); // show response from the php script.
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});
```
