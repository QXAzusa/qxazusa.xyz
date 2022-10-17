import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Hello() {
  return (
    <Layout title="联系方式" description="Contact Page">
    <head><meta name="robots" content="noindex, nofollow" /></head>
    <main class="container margin-vert--xl">
        <div class="row">
            <div class="col col--6 col--offset-3">
                <h1 class="hero__title">联系方式</h1>
                <h1 class="hero__subtitle">哔哩哔哩</h1>
                <p><a href='https://space.bilibili.com/148833361'>主页</a></p>
                <p><a href='https://message.bilibili.com/#whisper/mid148833361'>私信（需要登陆）</a></p>
                <h1 class="hero__subtitle">Twitter</h1>
                <p><a href='https://twitter.com/QXAzusa'>主页</a></p>
                <h1 class="hero__subtitle">棉花糖</h1>
                <p><a href='https://marshmallow-qa.com/qxazusa'>marshmallow-qa.com/qxazusa</a></p>
                <h1 class="hero__subtitle">电子邮箱</h1>
                <p>webmaster#qxazusa.xyz（#改为@）</p>
            </div>
        </div>
    </main>
    </Layout>
  );
}