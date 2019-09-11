vertical-align 只应用于行内元素和替换元素，如图像和表单输入元素，vertical-align 属性不能继承。

百分数：相对于元素 line-height 值。

应用于表单元素时，只能识别：baseline, top, middle, bottom;

## inline-block
当元素变为 inline-block 时，会发现父元素 height 值变化，这是 
inline 元素字体超出 height 导致。
设置 vertical-align 属性，可以避免此问题