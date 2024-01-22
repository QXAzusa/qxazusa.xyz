---
title: 网站优化记录
slug: website-optimization-record
date: 2022-03-03 11:00:00
authors: qxazusa
image: https://cdn.jsdelivr.net/npm/qxazusa-res/cover/1.webp
description: 在这段时间里，我做了什么？
tags: ['建站']
---

在这段时间里，我做了什么？
<!--truncate-->
背景：服务器在上海，服务地区包含中国（含港澳台）、日本，其他地区限制访问

友情提醒：本文仅个人记录用，无参考意义。

### 优化国内网络路径
考虑到Cloudflare上的页面规则已经完善，为了尽快上线国内CDN便直接将国内CDN回源到Cloudflare。一段时间后发现国内的静态内容的响应速度改善了但动态内容响应过于缓慢，与初衷相违背。

![原先网络路径](https://static.qxazusa.xyz/docusaurus/image/20220303031238668.png)
原先网络路径
![修改后的网络路径](https://static.qxazusa.xyz/docusaurus/image/20220303031044209.png)
修改后的网络路径

### 添置服务器，海内外分流
原先封面API全部由位于上海的主服务器来响应的，当用户在港澳台与日本地区访问时需要从Cloudflare网络回源到腾讯云ECDN再回源到上海的服务器，响应时间超过了2秒，严重影响了网页加载。

![示例](https://static.qxazusa.xyz/docusaurus/image/20220303032249695.png)
在Oracle Tokyo区添置了服务器后，现在港澳台与日本地区的API请求由位于东京的服务器响应，并使用主服务器作为备用路线，国内继续由主服务器响应。现在响应时延做到了600ms以下。
![示例](https://static.qxazusa.xyz/docusaurus/image/20220303045502362.png)


### 静态资源分流
静态资源在之前是由又拍云存储提供的，海外地区需要通过Cloudflare网络回源到国内获取资源，虽然Cloudflare会缓存静态内容，但第一次响应的时间很长。

现在海外的静态资源由阿里云的OSS（东京）提供，搭配Cloudflare的[带宽联盟](https://www.cloudflare.com/zh-cn/bandwidth-alliance/)，回源将不再计费。在阿里云OSS后台将又拍云云存储设为镜像源，上传文件时只在又拍云上传即可，如果阿里云缺少资源，会回到又拍云请求资源并存储。