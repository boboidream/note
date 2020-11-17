# Provider
最好能把 `Consumer` 放在 widget 树尽量低的位置上。你总不希望 UI 上任何一点小变化就全盘重新构建 widget 吧。



有的时候你不需要模型中的 **数据** 来改变 UI，但是你可能还是需要访问该数据。所以这里我们可以使用 `Provider.of`，并且将 `listen` 设置为 `false`。

```dart
Provider.of<CartModel>(context, listen: false).removeAll();
```





- [简单的应用状态管理](https://flutter.cn/docs/development/data-and-backend/state-mgmt/simple)

