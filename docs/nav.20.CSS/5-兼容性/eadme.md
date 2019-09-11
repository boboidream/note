## 设计云-VI兼容性

### IE9

- 需要加厂商前缀
```
-ms-transform: rotate(10deg);
```

- 不能使用属性
https://autoprefixer.github.io/


@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}

浏览器判断
http://www.cnblogs.com/leadzen/archive/2008/09/06/1285764.html

判断是否选中
if ( elem.checked )
if ( $( elem ).prop( "checked" ) )
if ( $( elem ).is( ":checked" ) )

自适应布局
http://www.cnblogs.com/tugenhua0707/p/3484685.html

### cursor
- [cursor样式](https://css-tricks.com/almanac/properties/c/cursor/)

```css
cursor: not-allowed 与 `pointer-events: none` 冲突 #6
```


### border-radius 边缘不齐问题
解决方案：可是我们改成这样：border:0;box-shadow:0px 0px 1px #EFEFEF;background-color:#9BC7E8;再次查看，会发现背景色好好的被圈在圆角边缘里面。

原因：因为border-radius本来就是设置border的属性的，当你定义了border的形状，颜色后，border-radius就对border生效，但是对内容（譬如内容的颜色等属性）的圆角范围就未定义，所以才超出边缘。
         后者这是先将border设置为0了，没有border的情况下，border-radius就对整个内容生效，对于边缘的颜色，我们可以利用box-shadow这个属性，设置其的扩展的属性为1，其他属性为0,则达到的效果和设置border是一样的。
        当然，如果你本来就只是想要圆角效果，不需要设置border，那可以直接设置border-radius属性即可。{:1_495:}
        
### 字体平滑
结论：iOS上，修改 -webkit-font-smoothing 属性，结果是：
```css
-webkit-font-smoothing: none : 无抗锯齿
-webkit-font-smoothing: antialiased | subpixel-antialiased | default : 灰度平滑
```

结论：MacOS上，修改 -webkit-font-smoothing 属性，结果是：
```css
-webkit-font-smoothing: none : 无抗锯齿
-webkit-font-smoothing: subpixel-antialiased | default : 次像素平滑
-webkit-font-smoothing: antialiased : 灰度平滑
```

[字体渲染抗锯齿CSS属性: -webkit-font-smoothing](https://stacktrace.tech/2017-02-10/webkit-font-smoothing/)
