---
title: Live2D Widget在Hexo上的部署
slug: live2d-widget-on-hexo
date: 2021-08-06 10:24:48
authors: qxazusa
image: https://cdn.jsdelivr.net/npm/qxazusa-res/cover/1.webp
description: 使博客的页面不再单调，分为普通版和可互动版本,部署起来相对简单
tags: ['Hexo']
---

在Hexo架构中使用Live2D看板娘，使博客的页面不再单调，分为普通版和可互动版本
<!--truncate-->
# 无换装、互动

### 本地部署

在博客根目录下安装依赖

```shell
npm install --save hexo-helper-live2d
```

打开站点配置文件 `[Blogroot]\config.yml`
搜索 live2d, 按照如下注释内容指示进行操作
如果没有搜到 live2d 的配置项，就直接把以下内容复制到最底部

```yaml
# Live2D
## https://github.com/EYHN/hexo-helper-live2d
live2d:
  enable: true #开关看板娘
  scriptFrom: local
  pluginRootPath: live2dw/ # 插件在站点上的根目录(相对路径)
  pluginJsPath: lib/ # 脚本文件相对与插件根目录路径
  pluginModelPath: assets/ # 模型文件相对与插件根目录路径
  tagMode: false # 标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
  debug: false # 调试, 是否在控制台输出日志
  model:
    use: live2d-widget-model-wanko # npm-module package name
  display:
    position: right #控制看板娘位置
    width: 150 #控制看板娘大小
    height: 300 #控制看板娘大小
  mobile:
    show: true # 手机中是否展示
```

在网站根目录下安装主题

```bash
npm install live2d-widget-model-wanko
```

在博客根目录下新建文件夹live2dw，将`[Blogroot]\node_modules\hexo-helper-live2d`和`[Blogroot]\node_modules\live2d-widget-model-wanko `下的所有文件复制到live2dw文件夹下。

其中所有的wanko均为主题名，可以根据需要替换为其他的[主题名](https://huaji8.top/post/live2d-plugin-2.0/)进行安装

### 调用外部资源

打开站点配置文件 `[Blogroot]\config.yml`
搜索 live2d, 按照如下注释内容指示进行操作
如果没有搜到 live2d 的配置项，就直接把以下内容复制到最底部

```yaml
# Live2D
## https://github.com/EYHN/hexo-helper-live2d
live2d:
  enable: true #开关插件版看板娘
  scriptFrom: jsdelivr # jsdelivr CDN
  tagMode: false # 标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
  debug: false # 调试, 是否在控制台输出日志
  model:
     use: https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko/assets/wanko.model.json # 你的自定义 url
  display:
    position: right #控制看板娘位置
    width: 150 #控制看板娘大小
    height: 300 #控制看板娘大小
  mobile:
    show: true # 手机中是否展示
```

其中第9行中的wanko为主题名，可以根据需要替换为其他的[主题名](https://huaji8.top/post/live2d-plugin-2.0/)进行安装

注意：在每次修改过live2d的内容后务必执行一次hexo clean命令再生成上传，不然不能生效。

# 可换装、互动
![示例](./simple.png)
### 仓库部署

将 [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget) 和 [fghrsh/live2d_api](https://github.com/fghrsh/live2d_api) fork到自己的仓库，在[Vercel](https://vercel.com/)将自己的项目部署在上面，等待部署结束后在Production Deployment下得到各项目的DOMAIN。<b>所有的DOMAIN开头都要带https://</b>
##配置修改

diff 代码块仅做色块标记，删除 +、- 号之后记得补全空格，调整缩进

live2d-widget项目下的autoload.js

```diff
- const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/"</font>;
+ const live2d_path = "<DOMAIN>";
//<DOMAIN>对应的是live-2d-widget项目的DOMAIN
```

```diff
- cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
+ cdnPath: "<DOMAIN>"
//<DOMAIN>对应的是live2d_api项目的DOMAIN
```

### CSS嵌入

以Buttery主题为例，修改`[Blogroot]\themes\butterfly\_config.yml`，其他主题参考主题文档

```yaml
  bottom:
    - <script src="<DOMAIN>/autoload.js"></script>
//<DOMAIN>对应的是live2d-widget项目的DOMAIN
```

**Done！**
