# MERN构建环境
> 自己用此工具，发现 webpack 依赖问题总得不到解决，已放弃，转向 react-starter-kit

## 资料地址
1. [MERN官网](http://mern.io/)
2. [mern-starter GitHub](https://github.com/Hashnode/mern-starter)
3. [安装mongoDB](https://docs.mongodb.com/v3.0/installation/)

## 安装步骤
1. 安装 `MongoDB`
```
brew update #更新homebrew

brew install mongodb #如需安装其他版本，TLS/SSL支持等，请查看官网。

mkdir -p ~/data/db #创建DATA目录

mongod -dbpath ~/data/db #运行Mongod
```

2. 安装 `MERN`
```
npm install -g mern-cli
mern init your_new_app
cd your_new_app
npm install
npm start
```

## 遇到问题
1. `npm install` 时报错
```
npm WARN babel-plugin-webpack-loaders@0.7.0 requires a peer of webpack@>=1.12.9 <3.0.0 but none was installed.
npm WARN chunk-manifest-webpack-plugin@0.1.0 requires a peer of webpack@^1.4.0-beta6 but none was installed.
npm WARN extract-text-webpack-plugin@1.0.1 requires a peer of webpack@^1.9.11 but none was installed.
```
解决方法
```
npm install webpack@1.13.1 #由于以上三者都依赖 webpack@1.X.X
```

2. 又出现
```
问题原因，由于多个插件所依赖的 webpack 版本不同，修改config.json
替换问题插件版本。
UNMET PEER DEPENDENCY webpack@2.1.0-beta.17

# 运行
npm install webpack@2.1.0-beta.17
```

3. 更新 [node](http://bytearcher.com/articles/ways-to-get-the-latest-node.js-version-on-a-mac/)
```
npm install -g nstall -g n

sudo n latest
```

## 最终，放弃此工具
