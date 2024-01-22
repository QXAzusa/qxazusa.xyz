---
title: Live2D Widget在Hexo上的部署
slug: live2d-widget-on-hexo
date: 2021-08-06 10:24:48
authors: qxazusa
image: https://cdn.jsdelivr.net/npm/qxazusa-res/cover/1.webp
description: 使部落格的頁麵不再單調，分為普通版和可互動版本,部署起來相對簡單
tags: ['Hexo']
---

在Hexo架構中使用Live2D看闆娘，使部落格的頁麵不再單調，分為普通版和可互動版本
<!--truncate-->
# 無換裝、互動

### 在地部署

在部落格根目錄下安裝依賴

```shell
npm install --save hexo-helper-live2d
```

打開站點配置文件 `[Blogroot]\config.yml`
搜索 live2d, 按照如下註釋內容指示進行操作
如果冇有搜到 live2d 的配置項，就直接把以下內容複製到最底部

```yaml
# Live2D
## https://github.com/EYHN/hexo-helper-live2d
live2d:
  enable: true #開關看闆娘
  scriptFrom: local
  pluginRootPath: live2dw/ # 插件在站點上的根目錄(相對路徑)
  pluginJsPath: lib/ # 腳本文件相對與插件根目錄路徑
  pluginModelPath: assets/ # 模型文件相對與插件根目錄路徑
  tagMode: false # 標簽模式, 是否僅替換 live2d tag標簽而非插入到所有頁麵中
  debug: false # 調試, 是否在控製臺輸出日誌
  model:
    use: live2d-widget-model-wanko # npm-module package name
  display:
    position: right #控製看闆娘位置
    width: 150 #控製看闆娘大小
    height: 300 #控製看闆娘大小
  mobile:
    show: true # 手機中是否展示
```

在網站根目錄下安裝主題

```bash
npm install live2d-widget-model-wanko
```

在部落格根目錄下新建檔案夾live2dw，將`[Blogroot]\node_modules\hexo-helper-live2d`和`[Blogroot]\node_modules\live2d-widget-model-wanko `下的所有文件複製到live2dw檔案夾下。

其中所有的wanko均為主題名，可以根據需要替換為其他的[主題名](https://huaji8.top/post/live2d-plugin-2.0/)進行安裝

### 調用外部資源

打開站點配置文件 `[Blogroot]\config.yml`
搜索 live2d, 按照如下註釋內容指示進行操作
如果冇有搜到 live2d 的配置項，就直接把以下內容複製到最底部

```yaml
# Live2D
## https://github.com/EYHN/hexo-helper-live2d
live2d:
  enable: true #開關插件版看闆娘
  scriptFrom: jsdelivr # jsdelivr CDN
  tagMode: false # 標簽模式, 是否僅替換 live2d tag標簽而非插入到所有頁麵中
  debug: false # 調試, 是否在控製臺輸出日誌
  model:
     use: https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko/assets/wanko.model.json # 你的自定義 url
  display:
    position: right #控製看闆娘位置
    width: 150 #控製看闆娘大小
    height: 300 #控製看闆娘大小
  mobile:
    show: true # 手機中是否展示
```

其中第9行中的wanko為主題名，可以根據需要替換為其他的[主題名](https://huaji8.top/post/live2d-plugin-2.0/)進行安裝

註意：在每次修改過live2d的內容後務必執行一次hexo clean命令再生成上載，不然不能生效。

# 可換裝、互動
![示例](https://static.qxazusa.xyz/docusaurus/image/Live2DWidget-simple.png)
### 倉庫部署

將 [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget) 和 [fghrsh/live2d_api](https://github.com/fghrsh/live2d_api) fork到自己的倉庫，在[Vercel](https://vercel.com/)將自己的項目部署在上麵，等待部署結束後在Production Deployment下得到各項目的DOMAIN。<b>所有的DOMAIN開頭都要帶https://</b>
##配置修改

diff 代碼塊僅做色塊標記，刪除 +、- 號之後記得補全空格，調整縮進

live2d-widget項目下的autoload.js

```diff
- const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/"</font>;
+ const live2d_path = "<DOMAIN>";
//<DOMAIN>對應的是live-2d-widget項目的DOMAIN
```

```diff
- cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
+ cdnPath: "<DOMAIN>"
//<DOMAIN>對應的是live2d_api項目的DOMAIN
```

### CSS嵌入

以Buttery主題為例，修改`[Blogroot]\themes\butterfly\_config.yml`，其他主題參考主題文檔

```yaml
  bottom:
    - <script src="<DOMAIN>/autoload.js"></script>
//<DOMAIN>對應的是live2d-widget項目的DOMAIN
```

**Done！**
