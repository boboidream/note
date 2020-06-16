 Dart 是一种强类型的语言

```dart
int lineCount;
assert(lineCount == null); // 断言
```



## 数据类型

```dart
const // 编译时常量
final // 第一次使用时定值
```



## 类

Dart 里的继承是一种基于类和 mixin 继承机制

命名构造函数：就是声明一个“类名.标识符 形式”的函数。

Shotcat.wife () {...}



实例变量和实例方法：顾名思义就是给实例用的变量和方法，**包括其子类的实例也可以访问！**

- 实例变量：给实例使用的变量。一般仅在类中进行声明，然后在构造函数或者实例方法中进行赋值初始化。
- 实例方法：给实例使用的方法。对象的实例方法可以访问实例变量和 this。



类变量和类方法，它们是**不能被实例访问到的！**

- 类变量(静态变量)：常用于声明类范围内所属的状态变量和常量。并且在其首次被使用的时候才被初始化。
- 类方法(静态方法)：不能被一个类的实例访问，同样地，静态方法内也不可以使用 this。



```dart 
class Son extends Father {
  Son():super.name(){ //通过super完成了对父类命名构造方法的调用
  // 这里先执行父类的命名构造函数，再执行这里子类的构造函数
    print("hello Father");
  }
}
```



**两个使用相同构造函数相同参数值构造的实例是同一个对象！**



## 泛型

dart中的泛型 使用`< ... >`表示，尖括号就是你要限定为的数据类型。它可以是String字符串类型 (`List`)，或者是你已声明的Shotcat类  (`Shotcat`)，这种明确的。也可以是不明确的，有时候你只知道需要对数据进行限定，但限定为具体那种类型则需要根据具体情况在后面进行设置。这种情况你就可以在`<>`里设置一个大写字母，进行占位，表示你要限定为的数据类型，只是你现在不知道是什么类型。例如：`<E>`

- E代表Element,元素.
- T代表Type,类型.
- K代表Key,键.
- V代表Value,值.



```dart 
var myGirlfriends = List<String>();
myGirlfriends.addAll(['新垣结衣', '石原里美', '暂时没想到']);
myGirlfriends.add(66); // 报错

var myNames = <String>{'吴彦祖', '彭于晏', '不会打篮球的CXK'};
```



## 引入

如果你导入的两个代码库有冲突的标识符，你可以为其中一个指定前缀，有点像命名空间。

```dart
import 'package:lib1/lib1.dart';
import 'package:lib2/lib2.dart' as lib2;

// 使用 lib1 的 Element 类。
Element element1 = Element();

// 使用 lib2 的 Element 类。
lib2.Element element2 = lib2.Element();
```



## 参考

- [flutter不完全指南系列--（二）dart详解（前端角度的两万字解析）](https://juejin.im/post/5dade0fa5188251d2c4ea3fb)

