# NPM
## 学习资料

- [玩转npm](http://www.alloyteam.com/2016/03/master-npm/)

- [npm模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html#toc0)

## 常用命令

- [安装命令](https://docs.npmjs.com/cli/install)

```
npm i xxx --save # 安装并添加依赖

npm i xxx --save-dev # 安装添加开发环境依赖

npm i xxx -g # 安装到全局
```



- 查看版本

```

npm dist-tags ls react

```



- 处理依赖关系

```

npm dedupe //不过npm dedupe命令做的事就是重新计算依赖关系，然后将包结构整理得更合理。

```



- 更新到最新版

```

$ npm install npm@latest -g

// node
npm install --global node-nightly
```


### YARN
- [yarn官网](https://yarnpkg.com/)

### cnpm
- [淘宝 NPM 镜像](https://npm.taobao.org/)

### package.json
末尾不允许多加 `,`