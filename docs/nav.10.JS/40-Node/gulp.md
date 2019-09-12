## gulp

- [启用删除文件插件 del](https://github.com/gulpjs/gulp/blob/a2c9e695ecf3600f21fa731e705fd1a0503632d9/docs/recipes/delete-files-folder.md)
- [gulp-swig](https://github.com/colynb/gulp-swig) Swig template compiler for Gulp

### browserSync Error: listen EACCES
```js
     mix.browserSync({
       proxy: 'review.qq.com',
       port: 3001,
       notify: false,
       watchTask: true,
       oprn: 'enternal',
       host: 'review.qq.com',
     })
```

这个错误说明端口被占用，只要更改下 port 就可以啦

### Did you forget to signal async completion?
原因是，task 回调函数没有被执行
``` coffeescript
gulp.task 'webpack', (cb) ->
  webpack webpackConfig, (err, stats) ->
    if err
      throw new gutil.PluginError 'webpack', err

    gutil.log '[webpack]', stats.toString { colors: true }
    # 这里执行回调
    cb()
```
