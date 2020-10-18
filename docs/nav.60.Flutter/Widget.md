# Widget

**`_MyStatefulWidgetState`** 类可以通过使用 **widget.{变量名称}** 来访问被存储在 **MyStatefulWidget** 中的任何变量。在该示例中为：**widget.color**。

https://juejin.im/post/5c768ad2f265da2dce1f535c



## 变量
永远不变、共用的，才在 Class static 变量声名

实例变量，可以在 Class 声明，在 initState 中进行初始化。



## GlobalKey 

### 1. 解决`duplicate GlobalKey detected in widget tree`问题

在 `initState`里，更新一个 GlobalKey

```dart
static GlobalKey<RecordPageState> recoardKey = GlobalKey();

static setRecoardKey() {
  recoardKey = GlobalKey();
}
```



### 2.外部刷新页面

```dart
if (ModalRoute.of(Global.recoardKey.currentContext).isCurrent) {
  // 立刻刷新
  Global.recoardKey.currentState.refreshPage(true);
} else {
  // 下次 show 时刷新
  Provider.of<ApplyChange>(Global.navigatorKey.currentContext, listen: false).isReloadRecord = true;
}
```

### 3. 打开全局弹窗
```dart
void _openAddEntryDialog() {
  Navigator.of(context).push(new MaterialPageRoute<Null>(
      builder: (BuildContext context) {
        return new AddEntryDialog();
      },
    fullscreenDialog: true
  ));
}
```
