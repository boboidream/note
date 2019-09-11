# express
[Express框架](http://javascript.ruanyifeng.com/nodejs/express.html#toc27)

## CROS
```
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
```

## 监听文件变化并重启服务器
nodemon 