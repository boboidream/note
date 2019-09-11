# 最佳实践

## 页面字体

```css
body {
    font-family: PingFangSC-Light,'helvetica neue','hiragino sans gb',tahoma,'microsoft yahei ui','microsoft yahei',simsun,sans-serif;
}
```

- [网页字体排印指南](http://aaaaaashu.me/shu/)


## 图片
- 区别
png8有1位的布尔透明通道（要么完全透明，要么完全不透明），png24则有8位（256阶）的布尔透明通道（所谓半透明）

- 经验
1.色彩丰富的、大的图片切成jpg的
2.尺寸小的，色彩不丰富的和背景透明的切成gif或者png8的；
3.半透明的切成png24。 

- 多倍图
每个页面按照设计高保真分目录：@1x @2x @3x。

## image-rendering 解决图片缩放模糊
当图片有缩放时，决定图片的渲染方式。
```css
img {
  image-rendering: auto; /* 浏览器默认 */
  image-rendering: crisp-edges; /* 边缘锐化 */
  image-rendering: pixelated; /* 像素化（马赛克） */
}
```

### 应用
防止图片缩放时被模糊，对 img 标签和 backgroud-img 都适用。
```css
div { 
        background: url(chessboard.gif) no-repeat 50% 50%;
        image-rendering: -moz-crisp-edges; /* Firefox */
        image-rendering:   -o-crisp-edges; /* Opera */
        image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
}
```

### svg
- [SVG 应用指南](https://svgontheweb.com/zh/)

### 参考资料
- [image-rendering - MDN](https://developer.mozilla.org/en/docs/Web/CSS/image-rendering)
- [image-rendering - css-tricks](https://css-tricks.com/almanac/properties/i/image-rendering/)