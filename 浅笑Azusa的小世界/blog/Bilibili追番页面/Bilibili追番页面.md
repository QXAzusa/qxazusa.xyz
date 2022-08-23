---
title: Bilibili追番页面
slug: bilibili-bangumi-page-on-hexo
date: 2021-08-06 11:16:10
authors: qxazusa
image: https://cdn.jsdelivr.net/npm/qxazusa-res/cover/5.webp
description: 用于显示个人在bilibili的追番内容，参考Github项目hexo-bilibili-bangumi
tags: ['Hexo']
---
在Hexo架构中用于显示个人在bilibili的追番内容，参考Github项目[hexo-bilibili-bangumi](https://github.com/HCLonely/hexo-bilibili-bangumi)
<!--truncate-->
![示例](./simple.png)
### 安装依赖

```bash
npm install hexo-bilibili-bangumi --save
```

### 配置
将下面的配置写入站点的配置文件 `_config.yml` 里(不是主题的配置文件).

``` yaml
bangumi:
  enable: true
  path:
  vmid:
  title: '追番列表'
  quote: '生命不息，追番不止！'
  show: 1
  loading:
  metaColor:
  color:
  webp:
  progress:
```

- **enable**: 是否启用
- **path**: 番剧页面路径，默认`bangumis/index.html`
- **vmid**: 哔哩哔哩的 `uid`（登录哔哩哔哩后前往[https://space.bilibili.com/](https://space.bilibili.com/)页面，网址最后的一串数字就是 `uid`）
- **title**: 该页面的标题
- **quote**: 写在页面开头的一段话，支持 html 语法，可留空。
- **show**: 初始显示页面：`0: 想看`, `1: 在看`, `2: 看过`，默认为`1`
- **loading**: 图片加载完成前的 loading 图片
- **metaColor**: meta 部分(简介上方)字体颜色
- **color**: 简介字体颜色
- **webp**: 番剧封面使用`webp`格式(此格式在`safari`浏览器下不显示，但是图片大小可以缩小 100 倍左右), 默认`true`
- **progress**: 获取番剧数据时是否显示进度条，默认`true`

注意：

1. 在`hexo generate`或`hexo deploy`之前使用`hexo bangumi -u`命令更新番剧数据！
2. 删除数据命令:`hexo bangumi -d`

***需要将追番列表设置为公开！***
