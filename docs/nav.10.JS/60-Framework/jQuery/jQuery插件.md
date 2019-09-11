# jQuery插件

## 插件库
[javascripting.io](https://www.javascripting.com)
## 地区选择
- [jQuery City Select](http://soulteary.github.io/jquery-city-select/)
- [PCASCLASS](http://www.popub.net/script/PCASClass.html)
- [distpicker](https://github.com/fengyuanchen/distpicker) 最好的地址插件

## 图片处理
http://www.oschina.net/news/56782/5-latest-jquery-image-crop-plugins

- [图片上传并预览](http://jqueryplugin.net/best-jquery-file-upload-plugins-with-image-previews/)
- [cropper](https://github.com/fengyuanchen/cropper)

- [Paperclip+Jcrop](http://railscasts.com/episodes/182-cropping-images?autoplay=true)
- [ Jcrop and Carrierwave](https://www.youtube.com/watch?v=yslwXYbmqJQ)
- [fancybox](http://fancybox.net/howto)

## exprot Excel
- [ TableExport.js v3.2.0](https://github.com/clarketm/TableExport)

- [validate](https://jqueryvalidation.org/)
> 表单验证插件

##  ajax 上传
- [JQForm](http://jquery.malsup.com/form/)

## 代码高亮
- [highlightjs](https://highlightjs.org/usage/) 主题：atom-one-light

## 生成二维码
- [jquery-qrcode](https://github.com/jeromeetienne/jquery-qrcode)
![配置项](./img/qrcode.png)

## 鼠标滚动
- [jQuery Mouse Wheel Plugin](https://github.com/jquery/jquery-mousewheel)

## tree
- [zTree](http://www.treejs.cn/v3/demo.php#_201)

## URI.js
解析地址用

## select2
`select2` 依赖 `jquery-mousewheel`，才能开启内部滚动鼠标，不影响外部 window

```js
$ = require 'jquery'
require 'jquery-mousewheel'
require 'select2'
```

## page.js 兼容 IE9
前端路由，可以阻止向后端发送请求。

官方虽然给出 profill 但是在 IE9 上依然无法使用。
https://github.com/visionmedia/page.js
https://github.com/devote/HTML5-History-API

需要使用这个 fork 版本
https://github.com/stoikerty/page.js

## 日期选择器 
[AIR DATEPICKER](http://t1m0n.name/air-datepicker/docs/)
[bootstrap datepicker]()

实现 range 优化
```js
// 日期 range
    $('.field-dates').datepicker({
			language: 'zh-CN',
			format: 'yyyy-mm-dd',
			autoclose: true,
			inputs: $('.datepicker')
		})

		var $start = $('input[name=plan_started_on]')
		var $end = $('input[name=plan_finished_on]')

		$end.on('changeDate', function(e) {
		  var endDate = $end.datepicker('getDate')
		  if (endDate) $start.datepicker('setEndDate', endDate)
		})

		$start.on('changeDate', function(e) {
		  console.log('update')
		  var startDate = $start.datepicker('getDate')
		  if (startDate) $end.datepicker('setStartDate', startDate)
		})

		$end.trigger('changeDate')
		$start.trigger('changeDate')
```

## 拖拽插件 [Sortable](https://github.com/RubaXa/Sortable)