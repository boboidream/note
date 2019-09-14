# Error 处理

Only make sure your error handlers are on the same domain. 
```js
// scripts/errorAjaxHandlerDom.js

window.addEventListener('error', function (e) {
  var stack = e.error.stack;
  var message = e.error.toString();

  if (stack) {
    message += '\n' + stack;
  }

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/log', true);
  // Fire an Ajax request with error details
  xhr.send(message);
});
```

when you put scripts on a CDN, for example, to exploit the limitation of six requests per domain. 

One solution is to re-throw errors while keeping the error message:

```js
try {
  return fn();
} catch (e) {
  throw new Error(e.message);
}
```

## 参考
* [](https://www.sitepoint.com/proper-error-handling-javascript/)
