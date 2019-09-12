# 导出ER模型

## 参考资料

- [How to create ER Diagram from existing Database using MySQL WorkBench](https://www.youtube.com/watch?v=Wfy8rdhXyWw)
- [mysql workbench如何把已有的数据库导出ER模型](http://blog.sina.com.cn/s/blog_0ee72b370102waef.html)
- [MySQL Workbench HomePage](http://www.mysql.com/products/workbench/)


## 命令

重置数据
```
rake db:drop db:create db:migrate db:seed
```

## 为关联表，新建项目
```
  def create
    @restaurant = Restaurant.find(params[:restaurant_id])
    @foodPackage = @restaurant.food_packages.build(foodPackage_params)

    if @foodPackage.save
      redirect_to console_merchant_path(params[:merchant_id]), notice: "恭喜您，创建餐厅成功！"
    else
      render edit_console_merchant_restaurant_food_package_path,  warning: "提交失败，请重新提交"
    end
  end

  private

  def foodPackage_params
    params.require(:post).permit(:name, :use_number, :before_price, :discount_price,
                                 :discount, :is_refund, :is_advance, :sweet_tips, :status, :normal, :stopping )
  end
```

## 新建表格书写
```
# foodPackage 为键名，且对应表
<%= simple_form_for :foodPackage, as: :post, url: console_merchant_restaurant_food_packages_path do |f| %>
```

## 更新时
```
# foodPackage 负责回传数据，当与form_for 命名相同时
  def edit
    @restaurant = Restaurant.find(params[:restaurant_id])
    @foodPackage = @restaurant.food_packages.find(params[:id])
  end
```

```
# form_for 编辑的数据默认传回 
params.require(:命名).permit(:name, :...)
```