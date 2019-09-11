## 获取DOM

### 选择器

- not选择器
```js
$('.vi_home a:not(:first-child)').hide()
```

- 判断 class

```js
.hasClass()
```

- 防止冒泡
```js
function cancelHandler(event){  
  var event = event || window.event;  //用于IE  
  if(event.preventDefault) event.preventDefault();  //标准技术  
  if(event.returnValue) event.returnValue = false;  //IE  
  return false;   //用于处理使用对象属性注册的处理程序  
}  
```


- radio 选中
```js
// 激活的 table 点击 tr 可以 checkbox
$modal.find('table.able tbody tr').on('click', function() {
	$(this).find('input[type=radio]').prop('checked', true)
})

// 获取被选中
$document.find('input:checked')
```

- buttton disabled
```js
 $("#rbutton'+i+'").attr("disabled",true);
 $("#rbutton_"+i).prop("disabled",true);

```


- 获得兄弟元素
```js
.prevAll( [selector ] ) // 获取全部前兄弟
.nextAll() // 后兄弟元素
.siblings('selector') // 全部兄弟元素
```

- 获得子元素
```js
.children( [selector ] )
```


### input file 文件，取消

默认取消时，会清空 file 值

目前采取的方法是，监听onchange更改提示语
```js
// 判空
if (target.files.length == 0) {
  console.log($(target).wrap('<form>').closest('form'))
  $document.find('.upload_file p').html('PSD；AI等设计源文件，可打包为zip；rar；7z等格式。<span>点击上传</span>')
  return
}
```

### 获取 tagName
```js
jQuery("<a>").prop("tagName"); //==> "A"
jQuery("<h1>").prop("tagName"); //==> "H1"
jQuery("<coolTagName999>").prop("tagName"); //==> "COOLTAGNAME999"
```

### node length
```js
// selector length
var count = $("#selected li").length;

// If you have to use .children(), then it's like this:
var count = $("#selected ul").children().length;
```

### 区分 `get() eq() index()`

```js
// 获取在 nodeList 中的次序，返回次序
$dom.index()

// 选中元素
$nodesList.eq(2)

// 返回元素
get() returns a DOM element
```

### 插入元素
```js
$( ".inner" ).prepend( "<p>Test</p>" );
```

### 判断是否隐藏
```js
if (!$document.find('.b_toolbar').is(':hidden')) closeToolbar()

$('.test').is(':visible')
// 判断说否聚焦
 $('input').is(':focus');
```

### 判断 dom 变化
```js
$("#someDiv").bind("DOMSubtreeModified", function() {
    alert("tree changed");
});
```
