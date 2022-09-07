---
title: 哔哩哔哩视频播放、直播流地址接口代理
date: 2022-09-07 16:00:00
slug: bilibili-api-proxy
authors: qxazusa
description: 分流哔哩哔哩视频和直播流请求接口，避免在使用特殊途径访问时被分配到不属于本地区的服务器
tags: ['Python']
---
分流哔哩哔哩视频和直播流请求接口，避免在使用特殊途径访问时被分配到不属于本地区的服务器减缓加载速度
<!--truncate-->
## 视频播放地址
1.屏蔽原先使用的域名 'upos-hz-mirrorakam.akamaized.net' 和 'upos-sz-mirrorcosov.bilivideo.com'

2.将 'https://api.bilibili.com/x/player/playurl?' 分流到 'http://127.0.0.1:5746/bili-api/player/playurl?' (附带请求参数)
## 直播流地址
1.屏蔽原先使用的域名

2.将 'https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo?' 分流到 'http://127.0.0.1:5746/bili-api/live-playurl?' (附带请求参数)
## 实现
```python
from flask import Flask,redirect,url_for,render_template,request,session,Response
from urllib.parse import urlparse
import requests
import json
app = Flask(__name__)
live_headers = {
    'Host': 'api.live.bilibili.com',
    'Origin': 'https://live.bilibili.com',
    'Referer': 'https://live.bilibili.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0'
}

api_header = {
    'Host': 'api.bilibili.com',
    'Origin': 'https://www.bilibili.com',
    'Referer': 'https://www.bilibili.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0',
    'Cookie': ''
}

@app.route('/')
def homePage(): 
    return render_template('index.html')
    
@app.route('/bili-api/live-playurl')
def roomplayurl():
    roomid = request.args.get('room_id')
    origin = request.headers.get('Origin') 
    url = 'https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo?room_id=' + roomid + '&no_playurl=0&mask=1&qn=0&platform=web&protocol=0%2C1&format=0%2C1%2C2&codec=0%2C1&dolby=5&panorama=1'
    proxies = { "http": None, "https": None}
    r = json.loads(requests.get(url, proxies=proxies, headers=live_headers).text)
    return r,200,{"Access-Control-Allow-Credentials":"true","access-control-allow-origin":origin,"ContentType":"application/json"}

@app.route('/bili-api/player/playurl')
def videoplayurl():
    avid = request.args.get('avid')
    bvid = request.args.get('bvid')
    cid = request.args.get('cid')
    origin = request.headers.get('Origin') 
    url = f'https://api.bilibili.com/x/player/playurl?avid={avid}&bvid={bvid}&cid={cid}&qn=0&fnver=0&fnval=4048&fourk=1&session=f0bf1a0061bcdbd3111a153489127be1'
    proxies = { "http": None, "https": None}
    r = json.loads(requests.get(url, proxies=proxies, headers=api_header).text)
    return r,200,{"Access-Control-Allow-Credentials":"true","access-control-allow-origin":origin,"ContentType":"application/json"}

@app.route('/bili-api/ip')
def ip():
    api = 'http://api.bilibili.com/x/web-interface/zone'
    proxies = { "http": None, "https": None}
    origin = request.headers.get('Origin') 
    r = json.loads(requests.get(api, proxies=proxies, headers=api_header).text)
    return r,200,{"Access-Control-Allow-Credentials":"true","access-control-allow-origin":origin,"ContentType":"application/json"}

if __name__ == '__main__':
    app.run(port=5746, debug=False)
```