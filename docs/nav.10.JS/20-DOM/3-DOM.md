## DOM

- script 标签插入页面位置，参考 [Where is the best place to put `<script>` tags in HTML markup?](http://stackoverflow.com/questions/436411/where-is-the-best-place-to-put-script-tags-in-html-markup)

> The current state-of-the-art is to put scripts in the `<head>` tag and use the async or defer attributes. This allows your scripts to be downloaded asap without blocking your browser.

> The good thing is that your website should still load correctly on the 20% of browsers that do not support these attributes, while speeding up the other 80%.


## 禁止 Alert()
覆写 window 的 alert 方法。

```js
window.alert = function() {};

// or simply
alert = function() {};

// change to console.log
alert = function() {
  console.log(arguments[0])
}
```

## 获取背景图片URL
```js
// 方案一
(window.getComputedStyle(element).getPropertyValue("background-image")).replace('url(','').replace(')','');

// 方案二
element.style.backgroundImage.match(/url\((.*)\?/)[1]
```

## 获取带回车的纯文本
```js
window.clipboardData.getData(“Text”)
```

## 按钮防止重复点击
```js
// 防重复点击
$this.attr('disabled', true).text('创建中…').css('opacity', '0.7')
$this.attr('disabled', false).text('更新会议').css('opacity', '1')
```

## 键盘事件
- [javascript控制表单输入](http://webfing.github.io/javascript-control-form-input/)

## 禁止缩放
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi" />
