import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Hello() {
  return (
    <Layout title="WAF Block" description="WAF Page">
    <head><meta name="robots" content="nOiNdeX, NoFolLoW" /></head>
    <main class="container margin-vert--xl">
        <div class="row">
            <div class="col col--6 col--offset-3">
                <h1 class="hero__title">WAF 阻止</h1>
                <h1 class="hero__subtitle">发生了什么</h1>
                <p>该网站正在使用安全服务来保护自己免受在线攻击，您刚刚执行的操作触发了安全防护。</p>
                <h1 class="hero__subtitle">可能会触发的情况</h1>
                <p>提交某个特定的单词或短语，SQL命令或格式错误的数据。</p>
                <p>Contact: webmaster#qxazusa.xyz（#改为@）</p>
            </div>
        </div>
    </main>
    </Layout>
  );
}