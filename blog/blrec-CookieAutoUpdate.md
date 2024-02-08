---
title: blrec项目Cookie自动更新临时解决方法
slug: blrec-CookieAutoUpdate
date: 2024-02-08 15:30:00
authors: qxazusa
---
哔哩哔哩存在cookie自动刷新机制，但广泛使用的blrec录播项目暂无此机制。
<!--truncate-->

目前哔哩哔哩开始限制未登陆用户获取原画源，当现有的cookie被服务器失效后录播软件blrec将陷入无法获取源的循环。

经找寻，发现 [biliup-rs](https://github.com/biliup/biliup-rs) 项目具有cookie刷新机制且将cookie输出为明文文件

本文给出了一种例子，每1小时自动使 biliup-rs 刷新cookie,再从输出的文件中拼接出新的cookie字符串并提交到blrec的接口

## biliup-rs部分
在biliup-rs目录下执行‘.\biliup login’并选择扫码登录以初始化。

## 代码
在biliup-rs运行目录下执行此代码
:::caution

仅供交流学习之用，在使用此代码时应自行承担所有风险

:::
```python
import json
import requests
import os
import time

# 定义录播服务器IP列表及启动时设置的APIKEY
hosts = ['10.254.0.1','10.254.0.3']
X-API-KEY = 'bili2233'

def checkLiveStatus():
    # 检查录播服务器是否不在线或处于录制状态
    # 注意：录制状态目前只判断了第一个直播间和一个服务器
    # 请修改 10.254.0.1 为自己服务器的IP，此函数还需改进
    headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0",
            "Accept": "application/json, text/plain, */*",
            "X-API-KEY": f"{X-API-KEY}",
            "Content-Type": "application/json",
            "Origin": "http://10.254.0.1:2233",
            "Connection": "close",
            "Referer": "http://10.254.0.1:2233/settings"
    }
    for i in range(1, 5):
        try:
            status = json.loads(requests.get("http://10.254.0.1:2233/api/v1/tasks/data?select=all", headers=headers).text)
        except:
            if str(i) == '4':
                print('连续三次向接口发送数据超时/失败，可能是网络问题或接口失效，终止发送')
                return 0
            print('向接口发送数据超时/失败，第' + str(i) + '次重试')
        else:
            print('成功向接口发送数据↑')
            break
    if status[0]['room_info']['live_status'] == 1: # 0：空闲；1：录播中；2：轮播中（等同空闲状态）
        return 0
    else:
        return 1

while True:
    while True:
        if checkLiveStatus() == 1:
            break
        else:
            time.sleep(60)
            continue
    os.system('.\biliup renew') # 发起cookie刷新
    try:
        with open('cookies.json', 'r') as f:
            data = json.load(f)
        cookies = '' # 将变量cookies置空，以防报错并清除上一轮的cookies残留
        # 拼接cookies值
        for i in range(0,len(data['cookie_info']['cookies'])):
            name = data['cookie_info']['cookies'][i]['name']
            value = data['cookie_info']['cookies'][i]['value']
            result = f'{name}={value};'
            cookies += str(result)
        data ={"header":{"cookie":f"{cookies}"}}
        # print(cookies)
    except:
        time.sleep(3600)
        continue
    for h in hosts:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0",
            "Accept": "application/json, text/plain, */*",
            "X-API-KEY": f"{X-API-KEY}",
            "Content-Type": "application/json",
            "Origin": f"http://{h}:2233",
            "Connection": "close",
            "Referer": f"http://{h}:2233/settings"
        }
    for i in range(1, 5):
        try:
            response = requests.patch(f"http://{h}:2233/api/v1/settings", json=data, headers=headers)
            if response.status_code > 299:
                raise RuntimeError
        except:
            if str(i) == '4':
                print('连续三次向接口发送数据超时/失败，可能是网络问题或接口失效，终止发送')
                break
            print('向接口发送数据超时/失败，第' + str(i) + '次重试')
        else:
            print('成功向接口发送数据↑')
            break
    # 1小时执行一次，自定义，单位为秒
    time.sleep(3600)

```