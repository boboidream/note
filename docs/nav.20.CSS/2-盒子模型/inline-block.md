# inline-block
```css
/* 带有 inline-block 属性的元素跟 inline 的元素类似
 * inline-block 之间的 html 空格或者制表符存在 letter-spacing 的间隙
 * 消除 inline-block 元素之间的间隙有以下的几种办法
 */
 
/* 1. 删除两个 inline-block html 元素之间 空格/制表符/换行符 */

/* 2. 设置 inline-block 的父元素 font-size:0; 再把子元素设置回原来的大小
 *    但是此方法不兼容 IE6/7/8 会让其始终保持 1px 的间隙 */
 
/* 3. 设置 inline-block 的父元素的 letter-spaceing 跟 word-spacing */

.inline-block-container {
  font-size: 0;
  /* webkit: collapse white-space between units */
  letter-spacing: -0.31em;
  /* reset IE < 8 */
  *letter-spacing: normal;
  /* IE < 8 && gecko: collapse white-space between units */
  word-spacing: -0.43em;
}

.inline-block {
  font-size: 12px;
  letter-spacing: normal;
  word-spacing: normal;
  vertical-align: top;
  display: inline-block;
  /* Hack for IE6/7 make element display as inline-block */
  *display: inline;
  *zoom: 1;
}
```