# 盒子模型

- box-shadow
```css
/* inset | offset-x | offset-y | spread-radius | color */
box-shadow: inset 0 0 1em gold;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
```

- 强制不换行
```css
div{
white-space:nowrap;
}
```

- text-indent
```css
/* Keyword values */
text-indent: 5em each-line;
text-indent: 5em hanging; 悬挂，除了首行，其他行缩进。不兼容
text-indent: 5em hanging each-line;不兼容
```

- 如何保持固定比例
padding-top 的百分比是相对于宽度的，所以可以用来做比例布局

- 多行省略号
```css
// 1. 针对 webkit 浏览器
p {
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

// 2. 兼容模式
p {
position:relative;
line-height:1.4em;
/* 3 times the line-height to show 3 lines */
height:4.2em;
overflow:hidden;
}
p::after {
	content:"...";
	font-weight:bold;
	position:absolute;
	bottom:0;
	right:0;
	padding:0 20px 1px 45px;
	background:url(http://css88.b0.upaiyun.com/css88/2014/09/ellipsis_bg.png) repeat-y;
}

// 3. 采用 JS 脚本
https://github.com/josephschmitt/Clamp.js/blob/master/clamp.js
https://github.com/FrDH/jQuery.dotdotdot/tree/master/src
```

### 保持盒子固定比例缩放，内部图片垂直水平居中

核心是： item_logo height 为 0 ,padding-bottom 为相对图片的比例；div.logo 通过 height: 100% 获取到高度，对img 进行布局。
```html
<div class="item_logo">
  <div class="logo">
    <img src="{$value.logo_url}">
  </div>
</div>
```

```css
.waltz_list .item_logo {
	position: relative;
	box-sizing: border-box;
	padding-bottom: 65%;
	width: 100%;
	height: 0;
	overflow: hidden;
	background-color: #ffffff;
	-webkit-transition: all 0.2s ease-in;
	transition: all 0.2s ease-in;
}
.waltz_list .item_logo .logo {
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
}
.waltz_list .item_logo img {
	max-width: 100%;
}
```

### 图片大小显示
max-width 支持百分比
max-height 
