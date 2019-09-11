## jQuery

### 遍历 formData

```
		// Display the key/value pairs
		for (var pair of formData.entries()) {
			console.log(pair[0]+','+pair[1])
		}
```

## 获取 checkbox 值
```
	var checkboxes = $('[name=type]')
		var typeVal = []

		checkboxes.each(function() {
			if($(this).is(':checked')) {
				typeVal.push($(this).val())
			}
		})

```

### 获取一组DOM的中的某个

$document.find('xxx').first()
$document.find('xxx').get(1)


## php
<assign name="var" value="123" />
在运行模板的时候 赋值了一个var的变量，值是123。


## dataTable
两者均能对dataTable进行初始化，但是当判断DataTable==dataTable的结果为false。

原因是：DataTable是老数据表构造，它返回一个jQuery对象。这个jQuery对象是丰富的的API方法，如fnfilter，fndeleterow等等。如：

dataTable.api().row(0).remove();


## ckeditor
获取数据
```
content: CKEDITOR.instances.content.getData(),
```

[三种配置方法](http://www.programgo.com/article/1445462398/)

/meeting/API/UploadCKE/



## 获取DOM高度数据
- [JS中offsetTop、clientTop、scrollTop、offsetTop各属性介绍](http://www.frontopen.com/894.html)

```js
// jquery获取元素到页面顶部距离的语句为：
$(selector).offset().top
```

## 动画
```js
$("button").click(function(){
    $("p").slideUp();
});
```
