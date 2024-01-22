---
title: 網站優化記錄
slug: website-optimization-record
date: 2022-03-03 11:00:00
authors: qxazusa
image: https://cdn.jsdelivr.net/npm/qxazusa-res/cover/1.webp
description: 在這段時間裏，我做了什麼？
tags: ['建站']
---

在這段時間裏，我做了什麼？
<!--truncate-->
背景：服務器在上海，服務地區包含中國（含港澳臺）、日本，其他地區限製訪問

友情提醒：本文僅個人記錄用，無參考意義。

### 優化國內網路路徑
考慮到Cloudflare上的頁麵規則已經完善，為了盡快上線國內CDN便直接將國內CDN回源到Cloudflare。一段時間後發現國內的靜態內容的回響速度改善了但動態內容回響過於緩慢，與初衷相違背。

![原先網路路徑](https://static.qxazusa.xyz/docusaurus/image/20220303031238668.png)
原先網路路徑
![修改後的網路路徑](https://static.qxazusa.xyz/docusaurus/image/20220303031044209.png)
修改後的網路路徑

### 添置服務器，海內外分流
原先封麵API全部由位於上海的主服務器來回響的，當用戶在港澳臺與日在地區訪問時需要從Cloudflare網路回源到騰訊雲ECDN再回源到上海的服務器，回響時間超過了2秒，嚴重影響了網頁加載。

![示例](https://static.qxazusa.xyz/docusaurus/image/20220303032249695.png)
在Oracle Tokyo區添置了服務器後，現在港澳臺與日在地區的API請求由位於東京的服務器回響，並使用主服務器作為備用路線，國內繼續由主服務器回響。現在回響時延做到了600ms以下。
![示例](https://static.qxazusa.xyz/docusaurus/image/20220303045502362.png)


### 靜態資源分流
靜態資源在之前是由又拍雲存儲提供的，海外地區需要通過Cloudflare網路回源到國內獲取資源，雖然Cloudflare會緩存靜態內容，但第一次回響的時間很長。

現在海外的靜態資源由阿裏雲的OSS（東京）提供，搭配Cloudflare的[帶寬聯盟](https://www.cloudflare.com/zh-cn/bandwidth-alliance/)，回源將不再計費。在阿裏雲OSS後臺將又拍雲雲存儲設為鏡像源，上載文件時隻在又拍雲上載即可，如果阿裏雲缺少資源，會回到又拍雲請求資源並存儲。