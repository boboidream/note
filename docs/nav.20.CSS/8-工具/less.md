# less

变量与单位组合

```less
width: @width*1px;
height: @height*1px;
```

```
可读取到 .lux-editor-attach 元素 data-size 属性
.lux-editor-attach::after {
    content: attr(data-size);
    display: block;
    font-size: 12px;
    color: #999999;
}
```