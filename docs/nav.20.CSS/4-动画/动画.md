## 动画

### 工具
- [可用的动画效果](http://leaverou.github.io/animatable/)
- [定制动画曲线](http://cubic-bezier.com/#.17,.67,.83,.67)
- [transition 可用属性](http://oli.jp/2010/css-animatable-properties/)

### js 解决方案
- [Isotope](http://isotope.metafizzy.co/#getting-started)

### 资料
- [CSS动画简介](http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html)

### 通过高度控制淡出
```css
.logo_wrap .info {
  height: 0;
  color: rgba(0, 0, 0, 0);
  transition: color .3s,height .3s;
}

.logo_wrap:hover .info {
  height: 40px;
  color: #fff;
  transition: color .3s,height .3s;
}
```

### 缓动函数
- [缓动函数](http://easings.net/zh-cn)

### loading
[loading](http://loading.io/)