# NPM基础知识
## 同时运行两个命令
[task automation with npm run](http://substack.net/task_automation_with_npm_run)

```bash
"build": "npm run build-js & npm run build-css"
```

## scripts
比较特别的是，npm run新建的这个 Shell，会将当前目录的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。

可以直接用脚本名调用
```bash
"test": "mocha test"

# 查看当前可执行脚本
ls node_modules/.bin
```

[参考资料](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

## 传参
向 npm 脚本传入参数，要使用--标明。

## 执行顺序
1. 如果是并行执行（即同时的平行执行），可以使用&符号。
2. 如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用&&符号。
