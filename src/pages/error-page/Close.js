import React from 'react'
import ReactDOM from 'react-dom'

// 创建元素
const title= <div><h3>网站维护中，请稍后访问!</h3><a target="_blank" rel="noopener" href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">本站由&nbsp;<img id="upyun_logo" alt="upyun_logo" src="//static.qxazusa.xyz/public/image/upyun_logo.png" align="center">&nbsp;提供CDN加速服务</a><br><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32081202000264" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 32081202000264号</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://icp.gov.moe/?keyword=20220417" target="_blank" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">萌ICP备20220417号</a></div>

ReactDOM.render(title, document.getElementById('root'))