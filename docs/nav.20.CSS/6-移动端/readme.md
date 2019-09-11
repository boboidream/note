- 滑动更顺滑
```css
-webkit-overflow-scrolling: touch; /* 当手指从触摸屏上移开，会保持一段时间的滚动 */

-webkit-overflow-scrolling: auto; /* 当手指从触摸屏上移开，滚动会立即停止 */
```

- [移动端web开发技巧](http://ljinkai.github.io/2015/06/06/mobile-web-skill/)

```css
a,button,input,textarea{
    -webkit-tap-highlight-color: rgba(0,0,0,0)
    -webkit-user-modify:read-write-plaintext-only;
}
```
-webkit-user-modify有个副作用，就是输入法不再能够输入多个字符
