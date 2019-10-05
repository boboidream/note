# express
[Express框架](http://javascript.ruanyifeng.com/nodejs/express.html#toc27)

## CROS
```
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
```

## 为 HTML 文件配置渲染引擎
```js
var express = require('express');
var app = express();
// 设置模板路径，默认为./views
// app.set('views', path.join('views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', function(req, res) {
  res.render('index', { helloWorld: 'hello,world' });
})
app.listen(3000, function() {
  console.log('app listen at 3000');
})
然后在views/index.html里写上模板内容就可以。
```
