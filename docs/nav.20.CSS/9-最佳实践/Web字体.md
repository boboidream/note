# Web 字体

## 字体子集化
### 1. FontTools
这是一个python的模块，运行以下命令即可完成安装。**非常推荐，TTF、OTF 都支持。**
```
pip install fonttools
```
基本使用也很方便， 只需要这样一行命令
```
pyftsubset font.ttf --text="汉字"
```
fonttools是一个全功能的字体工具，更多功能可以参阅项目地址。

[FontTools项目地址](https://github.com/fonttools/fonttools)

### 2. SfntTool
SfntTool来自google开发的一款字体编辑工具sfntly，运行需要有JAVA环境(jre)。 基本用法是

```
java -jar sfnttool.jar -s '需要的字体的文字信息' 原始字体.ttf 目标字体.ttf
```
SfntTool项目地址 | sfnttool.jar下载地址

### 3. FontForge
FontForge是一款功能齐全的开源免费软件，拥有可视化操作界面，可以方便地编辑调整各个字形，裁剪字体当然不在话下，不过这个界面稍显简朴。

### 4. Fontmin
选择字体文件并输入需要的文字后，可以同时生成ttf、eot、svg、woff等网页字体格式，还会生成相应css文件，方便用于网页。

## 字体下载
[fontke](https://www.fontke.com/) 字体比较全。
