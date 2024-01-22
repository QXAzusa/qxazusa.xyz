---
title: 嗶哩嗶哩內嵌播放軟體大小自適應
slug: bilibili-video-tag
date: 2021-07-13 16:53:20
tags: ['建站']
authors: qxazusa
description: 實現了在各種平臺上Bilibili播放視窗的自適應功能
---

實現了在各種熒幕大小下嗶哩嗶哩網頁內嵌播放軟體視窗的自適應功能
<!--truncate-->
## 實現

### 源碼

```html
<div style="position: relative; padding: 30% 45%;">

<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=323407284&aid=247534745&page=1&as_wide=1&high_quality=1&danmaku=0" frameborder="no" scrolling="no"></iframe>

</div>
```

### 例子：

這是從bilibili視訊分享嵌入代碼複製下來的內容

![示例橫幅](./2022-08-23-110856.png)

```html
<iframe src="//player.bilibili.com/player.html?aid=974165707&bvid=BV1t44y127ad&cid=370527205&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```
按照其中的內容修改源碼的中的aid的值為974165707
