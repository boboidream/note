# LifeRecycle

### 实现监听页面钩子

参考：https://www.jianshu.com/p/3edfa7d694e7

1. 在**MaterialApp**中定义一个**RouteObserver**对象

    ```
    final RouteObserver<Route<dynamic>> routeObserver = RouteObserver();

    class MyApp extends StatelessWidget {
        ... \\此处省略一些代码

        Widget _buildMaterialApp() => MaterialApp(
          initialRoute: '/',
          navigatorObservers: [routeObserver], //添加路由观察者
          onGenerateRoute: _onGenerateRoute);
    }
    ```

2. 在B页面中混淆**RouteAware**, 并注册**RouteObserver**

   ```
   class B extends StatefulWidget {
        B({Key key}) : super(key: key);
   }
   
   class BState extends State<B>  with RouteAware {
     @override
     void didChangeDependencies() {
       routeObserver.subscribe(this, ModalRoute.of(context)); //订阅
       super.didChangeDependencies();
     }
   
     @override
     void didPush() {
       debugPrint("------> didPush");
       super.didPush();
     }
   
     @override
     void didPop() {
       debugPrint("------> didPop");
       super.didPop();
     }
   
     @override
     void didPopNext() {
       debugPrint("------> didPopNext");
       super.didPopNext();
     }
     
   @override
     void didPushNext() {
       debugPrint("------> didPushNext");
       super.didPushNext();
     }
   
     @override
     void dispose() {
       routeObserver.unsubscribe(this); //取消订阅
       super.dispose();
     }
   }
   ```
   
   