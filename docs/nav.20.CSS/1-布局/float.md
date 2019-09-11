# float

## 特性
1. 包裹

会形成 BFC，
收缩： 水平方向，编程与对象大小相同
坚挺：垂直方向，恰包裹住对象
隔绝： 与外界无关

display: inline-block / table-cell / ...
position: absolute / fixed / sticky /
overflow: hidden / scroll

2. 破坏，父容器高度塌陷
> 由于历史原因，需要实现文字环绕效果

display: none
position: absolute / fixed /sticky / float

3. 清除浮动

3.1 浮动元素，底部插入一个兄弟 `clear: both` 的元素
3.2 父元素，BFC || haslayout(IE6/IE7)

```css
/* 非 ie 6/7 */
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
}

/* 更好方案 */
.clearfix:after {
  content: '';
  display: table;
  clear: both;
}

/* ie6 / ie7 */
.clearfix {
  *zoom: 1;
}

```

3. 浮动对元素的影响
3.1 浮动让元素 block 化。

3.2 浮动，会抛弃间隙，包括：回车、空格（考虑环绕布局）
**回车空格在标题末尾是没有任何表现的。**

4. 用浮动做什么
4.1 文字环绕，浮动 + inline
4.2 width + float:
padding-left / margin-left
4.3 右侧定宽布局
width: 100% + float
  padding-left / margin-left
width + float + margin 负值

4.4 左右自适应
float
display: table-cell // ie8+
display: inline-block // ie7

3. 三无主义
无宽度
无图片
无浮动

不使用浮动实现布局，切忌砌砖头
