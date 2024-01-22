---
title: 使用Cloudflare Worker做一個簡易的隨機圖片API
slug: random-photo
date: 2021-08-06 11:22:33
image: https://cdn.jsdelivr.net/npm/qxazusa-res/cover/3.webp
description: 使用Cloudflare Worker做一個隨機圖片API，在全球範圍內即時部署，保證低時延
authors: qxazusa
---
使用Cloudflare Worker做一個隨機圖片API，在全球範圍內即時部署，保證低時延
<!--truncate-->

```js
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})
 
async function handleRequest(request) {
    var max=6;
    var min=1;
    const pathname = 'cover/' + Math.floor(Math.random()*(max-min+1)+min) + '.png';
    const destinationDomain = "https://demo.qxazusa.xyz/" + pathname
    return Response.redirect(destinationDomain, 302)
}
```
解釋：以302回響隨機返回 https://demo.qxazusa.xyz/cover/ 目錄下(1-6).png的URL