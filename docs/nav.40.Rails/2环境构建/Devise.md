---
title: Divise
date: 2016-05-25
categories: Rails
tags: Rails

---

## Controller 中设置权限

```
# 只有用户自己才友权限更改自己的文章

@group = Group.new(group_params)
@group = current_user.groups.new(group_params)
```

## i18n 汉化
- [devise.zh-CN.yml](https://gist.github.com/Kenrick-Zhou/7909822)
用法：
```
# 添加文件
config/locales/divise.zh-CN.yml

# 设定默认地区
config.i18n.default_locale = 'zh-CN'
```
