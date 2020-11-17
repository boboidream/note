# Dart 命令行工具

运行方法 `dart command.dart`

```dart
import 'dart:io';

void main() {
  print('Enter your name:');
  String name = stdin.readLineSync();
  print('hello, $name !');

  // 计算器
  print('Enter first number:');
  int a = int.parse(stdin.readLineSync()); 
  print('Enter Secend num:');
  int b = int.parse(stdin.readLineSync()); 

  // stdout.write 无换行
  stdout.write('$a+$b=${a + b}');
  // print 有换行
  print('$a+$b=${a + b}');
}
```
