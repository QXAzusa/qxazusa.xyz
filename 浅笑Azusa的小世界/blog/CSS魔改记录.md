---
title: CSS魔改记录
date: 2021-07-15 17:40:47
slug: css-mod-on-hexo-theme-butterfly
authors: qxazusa
image: https://cdn.jsdelivr.net/npm/qxazusa-res/cover/6.webp
description: 这里记录了本站使用CSS方法做美化的一些记录，仅限于Butterfly主题
tags: ['Hexo']
---
[butterfly](https://github.com/jerryc127/hexo-theme-butterfly)为主题的基础下进行修改
记录了[原站](https://hexo.qxazusa.xyz/)使用CSS方法做美化的一些记录
<!--truncate-->
## 嵌入方法

在“博客根目录\themes\butterfly\source\css”下新建CSS文件

打开主题配置文件,在head下方写入  

```yaml
- <link rel="stylesheet" href="/css/CSS文件的文件名.css">
```

例如

```yaml
   inject:
    head:
   - <link rel="stylesheet" href="/css/partbackground.css">
   - <link rel="stylesheet" href="/css/background.css">
   #以此类推进行叠加
```

## 模块半透明

### 方法一：嵌入CSS

<b>缺点：</b>不适用于暗黑模式

```css
#recent-posts>.recent-post-item,.layout>div:first-child:not(.recent-posts),.layout_post>#page,.layout_post>#post,.read-mode .layout_post>#post
{
    background: rgba(255,255,255,.9);
    /* .9为透明度0.9，以此类推.8为透明度0.8，1为不透明 */
}
#aside-content .card-widget
{
    background: rgba(255,255,255,.9);
}
```

### 方法二：修改主题文件

**diff 代码块仅做色块标记，删除 +、- 号之后记得补全空格，调整缩进。**

`[Blogroot]\themes\butterfly\source\css\var.styl`

```diff
- $card-bg = $white
+ $card-bg = rgba(255,255,255,.85)
```

`[Blogroot]\themes\butterfly\source\css\_mode\darkmode.styl`

```diff
- --card-bg: #121212
+ --card-bg: rgba(0,0,0,.5)
```

## 全屏图片背景
**此部分内容有误，待修改**

修改主题配置文件

```yaml
disable_top_img: true
```

嵌入CSS文件

```css
#web_bg {
    /* 背景图像的地址（url括号里）  */
    background: url('https://gitee.com/jshahezy/blogs/raw/master/res/5005df7fec55a8b4980d0426566114f8c64df94a-min.webp');
    /* 背景图像不重复 */
    background-repeat: no-repeat;
    /* 背景图像大小 */
    background-size: cover;
    /* 背景图像居中显示 */
    background-position: center;
}
```

## 半透明底部

### 方法一：嵌入CSS

<b>缺点：</b>不适用于暗黑模式

```css
#footer {
    background: rgba(255,255,255,.15);/* 其中.15为透明度，根据需要修改即可 */
    color: #000;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    backdrop-filter: saturate(100%) blur(5px)
}

    #footer::before {
        background: rgba(255,255,255,.15)
            /* 其中.15为透明度，根据需要修改即可 */
    }

    #footer #footer-wrap {
        color: rgb(254, 44, 131)
    /* 此处为底部文字的颜色，下一部分同理 */
	}

        #footer #footer-wrap a {
            color: rgb(254, 44, 131)
        }

```

### 方法二：修改主题文件

**diff 代码块仅做色块标记，删除 +、- 号之后记得补全空格，调整缩进。**

`[Blogroot]\themes\butterfly\source\css\var.styl`

```diff
在":root"下添加
+ --foot-front: #FE2C83 !important
```

`[Blogroot]\themes\butterfly\source\css\_mode\darkmode.styl`

```diff
在  [data-theme='dark']  下添加
+ --foot-front: rgba(255,255,255,0.7) !important
```

嵌入CSS

```css
#footer {
    background: rgba(255,255,255,.15);/* 其中.15为透明度，根据需要修改即可 */
    color: #000;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    backdrop-filter: saturate(100%) blur(5px)
}

    #footer::before {
        background: rgba(255,255,255,.15)
            /* 其中.15为透明度，根据需要修改即可 */
    }

    #footer #footer-wrap {
        color: var(--foot-front)
	}

        #footer #footer-wrap a {
            color: var(--foot-front)
        }
```



## 引入阿里矢量图标库

参考<a href="https://www.cnblogs.com/MoYu-zc/p/14399186.html">Hexo-使用阿里iconfont图标 </a>即可，篇幅原因不再说明。
