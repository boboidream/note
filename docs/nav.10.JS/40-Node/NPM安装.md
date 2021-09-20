# NPM安装
```bash
# 安装最新版本
tnpm install @tencent/lux-upload-file@latest --save
# 更新
 tnpm update @tencent/member-picker --verbose
```

- 从git 直接安装
```
npm install git+https://git@github.com/visionmedia/express.git

npm install git+ssh://git@github.com/visionmedia/express.git
```

# NPM 发布
npm publish

.npmignore 文件忽略不愿发布的内容

# NPM 检查是否有包需要升级
```bash
tnpm outdated

 npm install -g npm-check
```



## hexo 升级

```bash 
//以下指令均在Hexo目录下操作，先定位到Hexo目录
//查看当前版本，判断是否需要升级
> hexo version

//全局升级hexo-cli
> npm i hexo-cli -g

//再次查看版本，看hexo-cli是否升级成功
> hexo version

//安装npm-check，若已安装可以跳过
> npm install -g npm-check

//检查系统插件是否需要升级
> npm-check

//安装npm-upgrade，若已安装可以跳过
> npm install -g npm-upgrade

//更新package.json
> npm-upgrade

//更新全局插件
> npm update -g

//更新系统插件
> npm update --save

//再次查看版本，判断是否升级成功
> hexo version
```

[Hexo-5.x 与 NexT-8.x 跨版本升级](https://www.imczw.com/post/tech/hexo5-next8-updated.html)