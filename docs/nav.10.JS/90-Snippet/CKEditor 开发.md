# CKEditor 开发
1. 调用 `widget` 如果希望直接运行，而不进入设置界面
```js
loader.on('uploaded', function(evt) {
		// 先插入元素
    var img = editor.document.createElement('img');
		    img.setAttribute('src', evt.sender.url);
        editor.insertElement(img);
    
    // 初始化为 widget
		editor.widgets.initOn(img, 'image')
})
```

2. 显示 `widget` 设置界面
```js

```

3. 图片上传插件
[simpleuploads](http://ckeditor.com/addon/simpleuploads)

## 更改 toolbar 状态栏状态
1. button 与 buttonGroup 都是挂载在 editor.ui 下的。
通过 `editor.ui.add` 创建，通过 `editor.ui.get` 获取实例

2. 获取到按钮 Obj 后，通过 Obj.setState 等接口做调整。
3. 获取当前编辑器的模式： editor.mode

```js
editor.on('mode', function() {
		if (editor.mode == 'source') {
			editor.ui.get(menu.getMenuGroup()).setState(CKEDITOR.TRISTATE_DISABLED)
		} else {
			editor.ui.get(menu.getMenuGroup()).setState(CKEDITOR.TRISTATE_OFF)
		}
	})
```

## 调用 iframy 解析 embed
调用三个插件
'embed,' +
'embedsemantic,' +
'autoembed,' + 

## 修复 ck 统计字数为 1 问题
```
editor.on 'change', ->
	$summary.trigger 'change'
	content = editor.document.getBody().getText()
	$('.word-count span').text(if content.charCodeAt(0) is 10 then 0 else content.length)
```