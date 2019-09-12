# 用Helper瘦身

## 可以看做是一个外联的JS文件

1. 在 `app/helpers` 中添加需要的文件，命令可与表名相关如：issues_helper.rb
2. 文件中结构如下，注意驼峰结构
 ```
 module IssuesHelper
  def test
    res = Issue.where(:id => 2)
    # res 为 Array
    res2 = res.as_json[0]
    # res2 为 Hash
    res["R"] = "Ruby"
    return res2 
  end
end
 ```
 
3. 引用时，在 `Controller` 中的 `Class` 上，引用 `include  IssuesHelper`
4. 可传参数

## help_method
什么是 helper_method？ 如果将方法设置为 helper_method，那就意味着该方法既可以在 controller 中使用，也可以在 view 中使用，这样会 大大提高编码效率，减少视图层的重复代码，使代码更加清晰。


## notice使用方法 Ctroller里

1. application.js里
 ```
//= require bootstrap/alert
//= require_tree .
 ```

2. application_helper.rb中插入
 ```
  def notice_message
    alert_types = { notice: :success, alert: :danger }
    close_button_options = { class: "close", "data-dismiss" => "alert", "aria-hidden" => true }
    close_button = content_tag(:button, "x", close_button_options)
    alerts = flash.map do |type, message|
      alert_content = close_button + message
      alert_type = alert_types[type.to_sym] || type
      alert_class = "alert alert-#{alert_type} alert-dismissable"
      content_tag(:div, alert_content, class: alert_class)
    end
    alerts.join("\n").html_safe
  end
 ```

3. application.html.erb中
 ```
  <%= notice_message %>
    <%= yield %>
 ```

4.  控制器中
 ```
redirect_to groups_path, alert: "讨论版已删除"
    # flash[:notice] = "早安！你好！"
    # flash[:alert] = "晚安，该睡觉啦！"
    # flash[:warning] = "warning!"
 ```



