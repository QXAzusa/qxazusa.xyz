import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Translate, {translate} from '@docusaurus/Translate';

export default function Hello() {
  return (
    <Layout title={translate({message: '联系方式'})} description="Contact Page">
    <head><meta name="robots" content="noindex, nofollow" /></head>
    <main class="container margin-vert--xl">
        <div class="row">
            <div class="col col--6 col--offset-3">
                <h1 class="hero__title"><Translate>联系方式</Translate></h1>
                <h1 class="hero__subtitle"><Translate>哔哩哔哩</Translate></h1>
                <p><a href='https://space.bilibili.com/148833361'><Translate>主页</Translate></a></p>
                <p><a href='https://message.bilibili.com/#whisper/mid148833361'><Translate>私信（需要登陆）</Translate></a></p>
                <h1 class="hero__subtitle"><Translate>棉花糖</Translate></h1>
                <p><a href='https://marshmallow-qa.com/qxazusa'>marshmallow-qa.com/qxazusa</a></p>
                <h1 class="hero__subtitle"><Translate>电子邮箱</Translate></h1>
                <p>webmaster#qxazusa.xyz</p>
            </div>
        </div>
    </main>
    </Layout>
  );
}
