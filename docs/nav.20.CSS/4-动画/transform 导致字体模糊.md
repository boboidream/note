# transform 导致字体模糊
原因：由于浏览器开启 GPU 渲染。

使用translate(-50%,-50%)之后，相当于宽度、高度除以2的效果，会出现 0.5px。浏览器能分辨的最小像素为1px，因此出现了模糊。

```css
  .box {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    border: 1px solid #ccc; 
    transform: translate3d(-27%, -41%, 0);
    /* transform: translate(-27%, -41%); */
    z-index: 999;
  }
```

### 独立上下文
[层叠上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)

每个层叠上下文完全独立于它的兄弟元素：当处理层叠时只考虑子元素。